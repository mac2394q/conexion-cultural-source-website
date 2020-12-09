<?php
/**
 * Grimlock_bbPress_Single_View_Customizer Class
 *
 * @author  Themosaurus
 * @since   1.0.0
 * @package grimlock
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * The Grimlock Customizer class for the posts page and the archive pages.
 */
class Grimlock_bbPress_Single_View_Customizer {
	use Grimlock_Custom_Header;

	/**
	 * Setup class.
	 *
	 * @since 1.0.0
	 */
	public function __construct() {
		add_filter( 'grimlock_custom_header_args',                           array( $this, 'add_custom_header_args' ), 30, 1 );
		add_filter( 'grimlock_bbpress_archive_forum_customizer_is_template', array( $this, 'is_template'            ), 10, 1 );
	}

	/**
	 * @param $default
	 *
	 * @return bool
	 */
	public function is_template( $default = false ) {
		return function_exists( 'bbp_is_single_view' ) && bbp_is_single_view() ||
		       $default;
	}

	/**
	 * Change the title for the Custom Header.
	 *
	 * @since 1.0.6
	 *
	 * @param  array $args The array of arguments for the Custom Header.
	 *
	 * @return array       The filtered array of arguments for the Custom Header.
	 */
	public function add_custom_header_args( $args ) {
		$this->add_custom_header_title( $args );
		if ( $this->is_template() ) {
			$args['subtitle'] = '';
		}
		return $args;
	}
}

return new Grimlock_bbPress_Single_View_Customizer();
