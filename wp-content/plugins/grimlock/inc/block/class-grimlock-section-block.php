<?php
// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class Grimlock_Section_Block
 *
 * @author  themosaurus
 * @since   1.3.5
 * @package grimlock/inc
 */
class Grimlock_Section_Block extends Grimlock_Base_Block {

	/**
	 * Setup class.
	 *
	 * @param string $type Block type
	 * @param string $domain Block domain
	 *
	 * @since 1.3.5
	 */
	public function __construct( $type = 'section', $domain = 'grimlock' ) {
		parent::__construct( $type, $domain );
	}

	/**
	 * Register the block in Gutenberg
	 */
	public function register_block() {
		parent::register_block();
		wp_localize_script( $this->js_handle, 'GrimlockSectionBlock', array( 'GRIMLOCK_PLUGIN_DIR_URL' => GRIMLOCK_PLUGIN_DIR_URL ) );
	}

	/**
	 * Get the list of attributes supported by this block
	 *
	 * @return array Array of supported attributes
	 */
	protected function get_supported_attributes() {
		$supported_attributes = array(
			'thumbnail'           => array(
				'type' => 'integer',
			),
			'title'               => array(
				'type' => 'string',
			),
			'subtitle'            => array(
				'type' => 'string',
			),
			'text'                => array(
				'type' => 'string',
			),
			'text_wpautoped'      => array(
				'type' => 'bool',
			),
			'button_text'         => array(
				'type' => 'string',
			),
			'button_link'         => array(
				'type' => 'string',
			),
			'button_target_blank' => array(
				'type' => 'bool',
			),
			'button_displayed'    => array(
				'type' => 'bool',
			),
			'layout'              => array(
				'type' => 'string',
			),
			'container_layout'    => array(
				'type' => 'string',
			),
			'background_image'    => array(
				'type' => 'integer',
			),
			'margin_top'          => array(
				'type' => 'integer',
			),
			'margin_bottom'       => array(
				'type' => 'integer',
			),
			'padding_y'           => array(
				'type' => 'integer',
			),
			'background_color'    => array(
				'type' => 'string',
			),
			'background_gradient' => array(
				'type' => 'string',
			),
			'border_top_width'    => array(
				'type' => 'integer',
			),
			'border_top_color'    => array(
				'type' => 'string',
			),
			'border_bottom_width' => array(
				'type' => 'integer',
			),
			'border_bottom_color' => array(
				'type' => 'string',
			),
			'title_format'        => array(
				'type' => 'string',
			),
			'title_color'         => array(
				'type' => 'string',
			),
			'subtitle_format'     => array(
				'type' => 'string',
			),
			'subtitle_color'      => array(
				'type' => 'string',
			),
			'text_color'          => array(
				'type' => 'string',
			),
			'button_format'       => array(
				'type' => 'string',
			),
			'button_size'         => array(
				'type' => 'string',
			),
			'align'               => array(
				'type' => 'string',
			),
			'className'           => array(
				'type' => 'string',
			),
		);
		$supported_attributes = $this->populate_supported_attributes_defaults( $supported_attributes );

		return $supported_attributes;
	}

	/**
	 * Populate default value for each supported attribute using the default values from the widget
	 *
	 * @param array $supported_attributes The array of supported attributes that needs to be populated with defaults
	 *
	 * @return array Supported attributes with defaults
	 */
	protected function populate_supported_attributes_defaults( $supported_attributes ) {
		// Use the default values from the widget
		$defaults = apply_filters( "{$this->id_base}_widget_defaults", array() );

		// Populate default attributes
		foreach ( $supported_attributes as $attribute_name => $attribute ) {
			if ( ! empty( $defaults[ $attribute_name ] ) ) {
				$supported_attributes[ $attribute_name ]['default'] = $defaults[ $attribute_name ];
			}
		}

		return $supported_attributes;
	}

	/**
	 * Render the Gutenberg block
	 *
	 * @param $attributes
	 * @param $content
	 *
	 * @return string
	 */
	public function render_block( $attributes, $content ) {
		$attributes = $this->sanitize_attributes( $attributes );
		ob_start();
		do_action( $this->id_base, apply_filters( "{$this->id_base}_block_component_args", $this->get_component_args( $attributes ) ) );
		return ob_get_clean();
	}

	/**
	 * Get the component args
	 *
	 * @param array $attributes Block attributes
	 *
	 * @return array Component args
	 */
	protected function get_component_args( $attributes ) {
		return array(
			'class'               => $this->get_classes( $attributes ),

			'margin_top'          => $attributes['margin_top'],
			'margin_bottom'       => $attributes['margin_bottom'],
			'padding_top'         => $attributes['padding_y'],
			'padding_bottom'      => $attributes['padding_y'],

			'background_image'    => $this->get_background_image_url( $attributes ),
			'background_color'    => $attributes['background_color'],

			'thumbnail'           => $this->get_thumbnail_url( $attributes ),
			'thumbnail_alt'       => $this->get_thumbnail_alt( $attributes ),
			'thumbnail_caption'   => $this->get_thumbnail_caption( $attributes ),

			'border_top_color'    => $attributes['border_top_color'],
			'border_top_width'    => $attributes['border_top_width'],
			'border_bottom_color' => $attributes['border_bottom_color'],
			'border_bottom_width' => $attributes['border_bottom_width'],

			'title'               => $attributes['title'],
			'title_color'         => $attributes['title_color'],
			'title_format'        => $attributes['title_format'],
			'title_displayed'     => ! empty( $attributes['title'] ),

			'subtitle'            => $attributes['subtitle'],
			'subtitle_color'      => $attributes['subtitle_color'],
			'subtitle_format'     => $attributes['subtitle_format'],
			'subtitle_displayed'  => ! empty( $attributes['subtitle'] ),

			'text'                => $attributes['text'],
			'text_wpautoped'      => $attributes['text_wpautoped'],
			'color'               => $attributes['color'],
			'text_displayed'      => ! empty( $attributes['text'] ),

			'button_text'         => $attributes['button_text'],
			'button_link'         => $attributes['button_link'],
			'button_target_blank' => $attributes['button_target_blank'],
			'button_displayed'    => $attributes['button_displayed'],
			'button_format'       => $attributes['button_format'],
			'button_size'         => $attributes['button_size'],

			'layout'              => $attributes['layout'],
			'container_layout'    => $attributes['container_layout'],

			'inner_styles'        => array( 'background' => $attributes['background_gradient'] ),
		);
	}

	/**
	 * Handles sanitizing attributes for the current block instance.
	 *
	 * @param array $new_attributes New attributes for the current block instance
	 *
	 * @return array Attributes to save
	 */
	public function sanitize_attributes( $new_attributes ) {
		$attributes = $new_attributes;

		$classes = isset( $new_attributes['className'] ) ? explode( ' ', str_replace( ',', ' ', $new_attributes['className'] ) ) : array();
		for( $i = 0; $i < count( $classes ); $i++ ) {
			$classes[$i] = sanitize_html_class( $classes[$i] );
		}
		$attributes['className'] = implode( ' ', $classes );

		if ( current_user_can( 'unfiltered_html' ) ) {
			$attributes['text'] = isset( $new_attributes['text'] ) ? $this->sanitize_text( $new_attributes['text'], true ) : '';
		} else {
			$attributes['text'] = isset( $new_attributes['text'] ) ? $this->sanitize_text( $new_attributes['text'] ) : '';
		}

		$attributes['margin_top']          = isset( $new_attributes['margin_top'] ) ? floatval( $new_attributes['margin_top'] ) : 0;
		$attributes['margin_bottom']       = isset( $new_attributes['margin_bottom'] ) ? floatval( $new_attributes['margin_bottom'] ) : 0;
		$attributes['padding_y']           = isset( $new_attributes['padding_y'] ) ? floatval( $new_attributes['padding_y'] ) : 0;

		$attributes['background_image']    = isset( $new_attributes['background_image'] ) ? intval( $new_attributes['background_image'] ) : 0;
		$attributes['background_color']    = isset( $new_attributes['background_color'] ) ? sanitize_text_field( $new_attributes['background_color'] ) : '';
		$attributes['background_gradient'] = isset( $new_attributes['background_gradient'] ) ? sanitize_text_field( $new_attributes['background_gradient'] ) : '';

		$attributes['thumbnail']           = isset( $new_attributes['thumbnail'] ) ? intval( $new_attributes['thumbnail'] ) : 0;

		$attributes['border_top_color']    = isset( $new_attributes['border_top_color'] ) ? sanitize_text_field( $new_attributes['border_top_color'] ) : '';
		$attributes['border_top_width']    = isset( $new_attributes['border_top_width'] ) ? intval( $new_attributes['border_top_width'] ) : 0;
		$attributes['border_bottom_color'] = isset( $new_attributes['border_bottom_color'] ) ? sanitize_text_field( $new_attributes['border_bottom_color'] ) : '';
		$attributes['border_bottom_width'] = isset( $new_attributes['border_bottom_width'] ) ? intval( $new_attributes['border_bottom_width'] ) : 0;

		$attributes['title']               = isset( $new_attributes['title'] ) ? $this->sanitize_text( $new_attributes['title'] ) : '';
		$attributes['title_color']         = isset( $new_attributes['title_color'] ) ? sanitize_text_field( $new_attributes['title_color'] ) : '';
		$attributes['title_format']        = isset( $new_attributes['title_format'] ) ? sanitize_text_field( $new_attributes['title_format'] ) : '';

		$attributes['subtitle']            = isset( $new_attributes['subtitle'] ) ? $this->sanitize_text( $new_attributes['subtitle'] ) : '';
		$attributes['subtitle_format']     = isset( $new_attributes['subtitle_format'] ) ? sanitize_text_field( $new_attributes['subtitle_format'] ) : '';
		$attributes['subtitle_color']      = isset( $new_attributes['subtitle_color'] ) ? sanitize_text_field( $new_attributes['subtitle_color'] ) : '';

		$attributes['color']               = isset( $new_attributes['color'] ) ? sanitize_text_field( $new_attributes['color'] ) : '';
		$attributes['text_wpautoped']      = filter_var( $attributes['text_wpautoped'], FILTER_VALIDATE_BOOLEAN );

		$attributes['button_text']         = isset( $new_attributes['button_text'] ) ? $this->sanitize_text( $new_attributes['button_text'] ) : '';
		$attributes['button_link']         = isset( $new_attributes['button_link'] ) ? esc_url( $new_attributes['button_link'] ) : '';
		$attributes['button_target_blank'] = filter_var( $attributes['button_target_blank'], FILTER_VALIDATE_BOOLEAN );
		$attributes['button_displayed']    = filter_var( $attributes['button_displayed'], FILTER_VALIDATE_BOOLEAN );
		$attributes['button_format']       = isset( $new_attributes['button_format'] ) ? sanitize_text_field( $new_attributes['button_format'] ) : '';
		$attributes['button_size']         = isset( $new_attributes['button_size'] ) ? sanitize_text_field( $new_attributes['button_size'] ) : '';

		$attributes['layout']              = isset( $new_attributes['layout'] ) ? sanitize_text_field( $new_attributes['layout'] ) : '';
		$attributes['container_layout']    = isset( $new_attributes['container_layout'] ) ? sanitize_text_field( $new_attributes['container_layout'] ) : '';
		$attributes['align']               = isset( $new_attributes['align'] ) ? sanitize_text_field( $new_attributes['align'] ) : '';

		return $attributes;
	}

	/**
	 * Filter HTML and encode emojis for database save
	 *
	 * @param $text
	 * @param bool $allow_unfiltered_html
	 *
	 * @return string
	 */
	protected function sanitize_text( $text, $allow_unfiltered_html = false ) {
		if ( ! empty( $allow_unfiltered_html ) ) {
			return wp_encode_emoji( $text );
		}

		return wp_kses_post( wp_encode_emoji( $text ) );
	}

	/**
	 * Get the block classes
	 *
	 * @param array $attributes Settings for the current block instance.
	 *
	 * @return array The block classes
	 */
	protected function get_classes( $attributes ) {
		$classes   = array( $attributes['className'] );
		$classes[] = "wp-block-{$this->domain}-{$this->type}";
		$classes[] = "{$this->domain}-{$this->type}--{$attributes['button_format']}";
		$title     = ! empty( $attributes['title'] ) ? sanitize_title( $attributes['title'] ) : '';

		if ( '' !== $title ) {
			$classes[] = "{$this->domain}-{$this->type}--{$title}";
		}

		if ( ! empty( $attributes['align'] ) ) {
			$classes[] = "align{$attributes['align']}";
		}

		return $classes;
	}

	/**
	 * Get the thumbnail url for the block
	 *
	 * @param array $attributes Settings for the current block instance.
	 *
	 * @return string The thumbnail url
	 */
	protected function get_thumbnail_url( $attributes ) {
		$thumbnail_url = '';

		if ( ! empty( $attributes['thumbnail'] ) ) {
			$thumbnail_url = wp_get_attachment_image_url( $attributes['thumbnail'], apply_filters( "{$this->id_base}_widget_thumbnail_size", "thumbnail-{$attributes['layout']}", $attributes['layout'] ) );
		}

		return $thumbnail_url;
	}

	/**
	 * Get the thumbnail alt for the block
	 *
	 * @param array $attributes Settings for the current block instance.
	 *
	 * @return string The thumbnail alt
	 */
	protected function get_thumbnail_alt( $attributes ) {
		$thumbnail_alt = '';

		if ( ! empty( $attributes['thumbnail'] ) ) {
			$thumbnail_alt = trim( strip_tags( get_post_meta( $attributes['thumbnail'], '_wp_attachment_image_alt', true ) ) );
		}
		return $thumbnail_alt;
	}

	/**
	 * Get the thumbnail caption for the block
	 *
	 * @param array $attributes Settings for the current block instance.
	 *
	 * @return string The thumbnail caption
	 */
	protected function get_thumbnail_caption( $attributes ) {
		$thumbnail_caption = '';

		if ( ! empty( $attributes['thumbnail'] ) ) {
			$thumbnail_caption = wp_get_attachment_caption( $attributes['thumbnail'] );
		}

		return $thumbnail_caption;
	}

	/**
	 * Get the background image url for the block
	 *
	 * @param array $attributes Settings for the current block instance.
	 *
	 * @return string The background image url
	 */
	protected function get_background_image_url( $attributes ) {
		$background_image_url = '';

		if ( ! empty( $attributes['background_image'] ) ) {
			$background_image_url = wp_get_attachment_image_url( $attributes['background_image'], apply_filters( "{$this->id_base}_widget_background_image_size", 'custom-header', $attributes['layout'] ) );
		}

		return $background_image_url;
	}
}

return new Grimlock_Section_Block();