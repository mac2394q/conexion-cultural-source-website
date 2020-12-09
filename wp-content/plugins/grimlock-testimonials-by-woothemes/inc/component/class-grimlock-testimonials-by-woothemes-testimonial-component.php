<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Class Grimlock_Testimonials_By_WooThemes_Testimonial_Component
 *
 * @author  themosaurus
 * @since   1.0.0
 * @package grimlock/inc/components
 */
class Grimlock_Testimonials_By_WooThemes_Testimonial_Component extends Grimlock_Component {
	/**
	 * Create a new Grimlock_Component instance.
	 *
	 * @param array $props Array of variables to be used within template.
	 */
	public function __construct( $props = array() ) {
		parent::__construct( wp_parse_args( $props, array(
			'post_thumbnail_displayed' => true,
            'post_thumbnail_size'      => 'medium',
			'post_thumbnail_attr'      => array( 'class' => 'card-img' ),
			'byline_displayed'         => true,
			'url_displayed'            => true,
		) ) );
	}

	/**
	 * Render the current component with props data on page.
	 *
	 * @since 1.0.0
	 */
	public function render() {
		/**
		 * Hook: grimlock_testimonials_by_woothemes_testimonial_template
		 *
		 * @hooked: grimlock_testimonials_by_woothemes_testimonial_template - 10
		 */
		do_action( 'grimlock_testimonials_by_woothemes_testimonial_template', $this->props );
	}
}