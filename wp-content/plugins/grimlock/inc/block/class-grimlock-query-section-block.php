<?php
// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class Grimlock_Query_Section_Block
 *
 * @author  themosaurus
 * @since   1.3.5
 * @package grimlock/inc
 */
class Grimlock_Query_Section_Block extends Grimlock_Section_Block {

	/**
	 * Setup class.
	 *
	 * @param string $type Block type
	 * @param string $domain Block domain
	 *
	 * @since 1.3.5
	 */
	public function __construct( $type = 'query-section', $domain = 'grimlock' ) {
		parent::__construct( $type, $domain );
	}

	/**
	 * Register the block in Gutenberg
	 */
	public function register_block() {
		parent::register_block();

		$post_types = get_post_types( '', 'objects' );
		$post_types_choices = array();
		foreach ( $post_types as $post_type ) {
			$post_types_choices[] = array( 'value' => $post_type->name, 'label' => $post_type->label );
		}

		$taxonomies         = get_taxonomies( array(), 'objects' );
		$taxonomies_choices = array();

		foreach ( $taxonomies as $taxonomy ) {
			$terms         = get_terms( array( 'taxonomy' => $taxonomy->name ) );
			$terms_choices = array();

			foreach ( $terms as $term ) {
				$terms_choices[] = array( 'value' => $taxonomy->name . '|' . $term->slug, 'label' => $term->name );
			}

			$taxonomies_choices[] = array(
				'label' => $taxonomy->label,
				'options' => $terms_choices,
			);
		}

		wp_localize_script( $this->js_handle, 'GrimlockQuerySectionBlock', array( 'POST_TYPES' => $post_types_choices, 'TAXONOMIES' => $taxonomies_choices ) );
	}

	/**
	 * Get the list of attributes supported by this block
	 *
	 * @return array Array of supported attributes
	 */
	protected function get_supported_attributes() {
		$supported_attributes = parent::get_supported_attributes();
		$supported_attributes = array_merge( $supported_attributes, array(
			'post_type' => array(
				'type' => 'string',
			),
			'taxonomies' => array(
				'type' => 'array',
			),
			'meta_key'            => array(
				'type' => 'string',
			),
			'meta_compare'        => array(
				'type' => 'string',
			),
			'meta_value'          => array(
				'type' => 'string',
			),
			'meta_value_num'      => array(
				'type' => 'bool',
			),
			'posts_per_page'      => array(
				'type' => 'string',
			),
			'orderby'             => array(
				'type' => 'string',
			),
			'order'               => array(
				'type' => 'string',
			),
			'posts_layout'        => array(
				'type' => 'string',
			),
		) );
		$supported_attributes = $this->populate_supported_attributes_defaults( $supported_attributes );

		return $supported_attributes;
	}

	/**
	 * Get the component args
	 *
	 * @param array $attributes Block attributes
	 *
	 * @return array Component args
	 */
	protected function get_component_args( $attributes ) {
		$args = parent::get_component_args( $attributes );

		return array_merge( $args, array(
			'posts_layout'        => $attributes['posts_layout'],
			'post_thumbnail_size' => apply_filters( "{$this->id_base}_widget_post_thumbnail_size", 'large', $attributes['posts_layout'], $attributes['post_type'] ),
			'layout'              => $attributes['layout'],
			'container_layout'    => $attributes['container_layout'],

			'query'               => $this->make_query( $attributes ),
		) );
	}

	/**
	 * Handles sanitizing attributes for the current block instance.
	 *
	 * @param array $new_attributes New attributes for the current block instance
	 *
	 * @return array Attributes to save
	 */
	public function sanitize_attributes( $new_attributes ) {
		$attributes = parent::sanitize_attributes( $new_attributes );

		$attributes['posts_layout']   = isset( $new_attributes['posts_layout'] ) ? sanitize_text_field( $new_attributes['posts_layout'] ) : '';

		$attributes['post_type']      = isset( $new_attributes['post_type'] ) ? sanitize_text_field( $new_attributes['post_type'] ) : '';
		$attributes['taxonomies']     = isset( $new_attributes['taxonomies'] ) ? $new_attributes['taxonomies'] : array();
		$attributes['meta_key']       = isset( $new_attributes['meta_key'] ) ? sanitize_text_field( $new_attributes['meta_key'] ) : '';
		$attributes['meta_compare']   = isset( $new_attributes['meta_compare'] ) ? sanitize_text_field( $new_attributes['meta_compare'] ) : '';
		$attributes['meta_value']     = isset( $new_attributes['meta_value'] ) ? sanitize_text_field( $new_attributes['meta_value'] ) : '';
		$attributes['meta_value_num'] = ! empty( $new_attributes['meta_value_num'] );
		$attributes['posts_per_page'] = isset( $new_attributes['posts_per_page'] ) ? sanitize_text_field( $new_attributes['posts_per_page'] ) : '';
		$attributes['orderby']        = isset( $new_attributes['orderby'] ) ? sanitize_text_field( $new_attributes['orderby'] ) : '';
		$attributes['order']          = isset( $new_attributes['order'] ) ? sanitize_text_field( $new_attributes['order'] ) : '';

		return $attributes;
	}

	/**
	 * Build the WP_Query instance that will be used in the block
	 *
	 * @param array $attributes Block attributes
	 *
	 * @return WP_Query The query for the block
	 */
	protected function make_query( $attributes ) {
		$query_args = array(
			'post_type'      => $attributes['post_type'],
			'posts_per_page' => $attributes['posts_per_page'],
			'orderby'        => $attributes['orderby'],
			'order'          => $attributes['order'],
		);

		if ( ! empty( $attributes['taxonomies'] ) ) {
			$taxonomies_terms = array();
			foreach ( $attributes['taxonomies'] as $term ) {
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

		$query_args['meta_key'] = $attributes['meta_key'];
		$meta_value_arg = empty( $attributes['meta_value_num'] ) ? 'meta_value' : 'meta_value_num';
		$query_args[ $meta_value_arg ] = $attributes['meta_value'];
		$query_args['meta_compare'] = $attributes['meta_compare'];

		$query_args = apply_filters( "{$this->id_base}_block_query_args", $query_args, $attributes );

		return new WP_Query( $query_args );
	}
}

return new Grimlock_Query_Section_Block();
