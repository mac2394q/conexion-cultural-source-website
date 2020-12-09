<?php
// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class Grimlock_Testimonials_By_WooThemes
 *
 * @author  octopix
 * @since   1.0.0
 * @package grimlock-testimonials-by-woothemes/inc
 */
class Grimlock_Testimonials_By_WooThemes {
	/**
	 * Setup class.
	 *
	 * @since 1.0.0
	 */
	public function __construct() {
		load_plugin_textdomain( 'grimlock-testimonials-by-woothemes', false, 'grimlock-testimonials-by-woothemes/languages' );

		require_once GRIMLOCK_TESTIMONIALS_BY_WOOTHEMES_PLUGIN_DIR_PATH . 'inc/grimlock-testimonials-by-woothemes-template-functions.php';
		require_once GRIMLOCK_TESTIMONIALS_BY_WOOTHEMES_PLUGIN_DIR_PATH . 'inc/grimlock-testimonials-by-woothemes-template-hooks.php';

		add_filter( 'grimlock_custom_header_args', array( $this, 'add_custom_header_args' ), 10, 1 );
		add_filter( 'grimlock_content_class',      array( $this, 'add_content_classes'    ), 10, 1 );

		// Initialize components.
		require_once GRIMLOCK_TESTIMONIALS_BY_WOOTHEMES_PLUGIN_DIR_PATH . 'inc/component/class-grimlock-testimonials-by-woothemes-testimonial-component.php';

		add_action( 'grimlock_query_testimonial', array( $this, 'query_testimonial' ), 10, 1 );

		// Initialize widgets.
		require_once GRIMLOCK_TESTIMONIALS_BY_WOOTHEMES_PLUGIN_DIR_PATH . 'inc/widget/class-grimlock-testimonials-by-woothemes-testimonials-section-widget.php';
		require_once GRIMLOCK_TESTIMONIALS_BY_WOOTHEMES_PLUGIN_DIR_PATH . 'inc/widget/fields/class-grimlock-testimonials-by-woothemes-testimonials-section-widget-fields.php';

		add_action( 'widgets_init', array( $this, 'widgets_init' ), 10 );
	}

	/**
	 * Add the post type to display the title in Custom Header.
	 *
	 * @param $args
	 *
	 * @return array
	 */
	public function add_custom_header_args( $args ) {
		if ( is_post_type_archive( 'testimonial' ) ) {
			$post_type_obj = get_post_type_object( 'testimonial' );
			$archive_title = esc_html__( 'Testimonials', 'grimlock-testimonials-by-woothemes' );

			if ( is_object( $post_type_obj ) && isset( $post_type_obj->label ) && $post_type_obj->label !== '' ) {
				$archive_title = $post_type_obj->label;
			}

			$args['title'] = $archive_title;
		} elseif ( is_singular( 'testimonial' ) ) {
			$args['title'] = single_post_title( '', false );
		}
		return $args;
	}

	/**
	 * Add custom classes to content to modify layout.
	 *
	 * @param $classes
	 * @since 1.0.0
	 *
	 * @return string
	 */
	public function add_content_classes( $classes ) {
		if ( is_post_type_archive( 'testimonial' ) || is_singular( 'testimonial' ) ) {
			$classes[] = "region--container-classic";
		}
		return $classes;
	}

	/**
	 * Display the testimonial component for the Testimonial post type.
	 *
	 * @param array $args
	 * @since 1.0.0
	 */
	public function query_testimonial( $args = array() ) {
		$component = new Grimlock_Testimonials_By_WooThemes_Testimonial_Component( apply_filters( 'grimlock_testimonials_by_woothemes_testimonial_args', $args ) );
		$component->render();
	}

	/**
	 * Register the custom widgets.
	 *
	 * @since 1.0.0
	 */
	public function widgets_init() {
		register_widget( 'Grimlock_Testimonials_By_WooThemes_Testimonials_Section_Widget' );
	}
}