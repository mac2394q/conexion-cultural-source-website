<?php

/**
 * Grimlock_Testimonials_By_WooThemes_Testimonials_Section_Widget_Fields Class
 *
 * @author  Themosaurus
 * @since   1.0.0
 * @package  grimlock
 */
class Grimlock_Testimonials_By_WooThemes_Testimonials_Section_Widget_Fields extends Grimlock_Query_Section_Widget_Fields {

	/**
	 * Setup class
	 *
	 * @since 1.0.0
	 * @access public
	 */
	public function __construct( $id_base = 'grimlock_testimonials_by_woothemes_query_section_widget' ) {
		parent::__construct( $id_base );

		// Query tab
		remove_action( "{$this->id_base}_query_tab", array( $this, 'add_post_type_field' ), 100 );
	}

	/**
	 * Add a select to set the taxonomies for the query
	 *
	 * @param array $instance
	 * @param WP_Widget $widget
	 * @since 1.0.0
	 */
	public function add_taxonomies_field( $instance, $widget ) {
		$taxonomies = get_taxonomies(
			array(
				'public' => true,
				'name'   => 'testimonial-category',
			),
			'objects'
		);

		$taxonomies_choices = array();

		foreach ( $taxonomies as $taxonomy ) {
			$terms = get_terms( array( 'taxonomy' => $taxonomy->name ) );
			$terms_choices = array();
			foreach ( $terms as $term ) {
				$terms_choices[$taxonomy->name . '|' . $term->slug] = $term->name;
			}

			$taxonomies_choices[$taxonomy->name] = array(
				'label' => $taxonomy->label,
				'subchoices' => $terms_choices,
			);
		}

		$args = array(
			'id'       => $widget->get_field_id( 'taxonomies' ),
			'name'     => $widget->get_field_name( 'taxonomies' ),
			'label'    => esc_html__( 'Taxonomies:', 'grimlock-testimonials-by-woothemes' ),
			'value'    => $instance['taxonomies'],
			'choices'  => $taxonomies_choices,
			'multiple' => true,
		);

		$this->select( apply_filters( "{$this->id_base}_taxonomies_field_args", $args, $instance ) );
	}

	/**
	 * Change the default settings for the widget
	 *
	 * @param array $defaults The default settings for the widget.
	 *
	 * @return array The updated default settings for the widget.
	 */
	public function change_defaults( $defaults ) {
		$defaults = parent::change_defaults( $defaults );

		return array_merge( $defaults, array(
			'title'               => esc_html__( 'Testimonials', 'grimlock-testimonials-by-woothemes' ),

			'posts_layout'        => '12-cols-classic',
			'layout'              => '12-cols-center',
			'container_layout'    => 'narrower',

			'button_text'         => esc_html__( 'More testimonials', 'grimlock-testimonials-by-woothemes' ),

			'posts_per_page'      => '1',
			'orderby'             => 'menu_order',
			'order'               => 'ASC',
		) );
	}

	/**
	 * @param $instance
	 *
	 * @return WP_Query
	 */
	public function make_query( $instance ) {
		$query_args = array(
			'post_type'      => 'testimonial',
			'posts_per_page' => $instance['posts_per_page'],
			'orderby'        => $instance['orderby'],
			'order'          => $instance['order'],
		);

		if ( ! empty( $instance['taxonomies'] ) ) {
			$taxonomies_terms = array();
			foreach ( $instance['taxonomies'] as $term ) {
				$taxonomy_term = explode( '|', $term, 2 );
				if ( ! isset( $taxonomies_terms[ $taxonomy_term[0] ] ) ) {
					$taxonomies_terms[ $taxonomy_term[0] ] = array();
				}
				$taxonomies_terms[ $taxonomy_term[0] ][] = $taxonomy_term[1];
			}

			$tax_query = array();
			foreach ( $taxonomies_terms as $taxonomy => $terms ) {
				$tax_query[] = array(
					'taxonomy' => $taxonomy,
					'field'    => 'slug',
					'terms'    => $terms
				);
			}

			$query_args['tax_query'] = $tax_query;
		}

		$query_args['meta_key'] = $instance['meta_key'];
		$meta_value_arg = empty( $instance['meta_value_num'] ) ? 'meta_value' : 'meta_value_num';
		$query_args[ $meta_value_arg ] = $instance['meta_value'];
		$query_args['meta_compare'] = $instance['meta_compare'];

		return new WP_Query( $query_args );
	}

	/**
	 * Get the widget classes
	 *
	 * @param array $instance Settings for the current widget instance.
	 *
	 * @return array The widget classes
	 */
	protected function get_classes( $instance ) {
		$classes   = array( $instance['classes'] );
		$classes[] = "grimlock-query-section--testimonials-by-woothemes";
		$classes[] = "grimlock-section--{$instance['button_format']}";
		$title     = ! empty( $instance['title'] ) ? sanitize_title( $instance['title'] ) : '';

		if ( '' !== $title ) {
			$classes[] = "grimlock-query-section--{$title}";
		}

		return $classes;
	}
}

return new Grimlock_Testimonials_By_WooThemes_Testimonials_Section_Widget_Fields();