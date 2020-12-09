<?php
namespace ElementorPro\Modules\Woocommerce\Widgets;

use Elementor\Controls_Manager;
use Elementor\Core\Schemes;
use Elementor\Group_Control_Typography;
use ElementorPro\Modules\Woocommerce\Classes\Products_Renderer;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Archive_Products extends Products {

	public function get_name() {
		return 'wc-archive-products';
	}

	public function get_title() {
		return __( 'Archive Products', 'elementor-pro' );
	}

	public function get_categories() {
		return [
			'woocommerce-elements-archive',
		];
	}

	protected function _register_controls() {
		parent::_register_controls();

		$this->remove_responsive_control( 'columns' );
		$this->remove_responsive_control( 'rows' );
		$this->remove_control( 'orderby' );
		$this->remove_control( 'order' );

		$this->update_control(
			'products_class',
			[
				'prefix_class' => 'elementor-products-grid elementor-',
			]
		);

		// Should be kept as hidden since required for "allow_order"
		$this->update_control(
			'paginate',
			[
				'type' => 'hidden',
				'default' => 'yes',
			]
		);

		$this->update_control(
			'allow_order',
			[
				'default' => 'yes',
			]
		);

		$this->start_injection( [
			'at' => 'before',
			'of' => 'allow_order',
		] );

		if ( ! get_theme_support( 'woocommerce' ) ) {
			$this->add_control(
				'wc_notice_wc_not_supported',
				[
					'type' => Controls_Manager::RAW_HTML,
					'raw' => __( 'Looks like you are using WooCommerce, while your theme does not support it. Please consider switching themes.', 'elementor-pro' ),
					'content_classes' => 'elementor-panel-alert elementor-panel-alert-warning',
				]
			);
		}

		$this->add_control(
			'wc_notice_use_customizer',
			[
				'type' => Controls_Manager::RAW_HTML,
				'raw' => __( 'To change the Products Archive’s layout, go to Appearance > Customize.', 'elementor-pro' ),
				'content_classes' => 'elementor-panel-alert elementor-panel-alert-info',
			]
		);

		$this->add_control(
			'wc_notice_wrong_data',
			[
				'type' => Controls_Manager::RAW_HTML,
				'raw' => __( 'The editor preview might look different from the live site. Please make sure to check the frontend.', 'elementor-pro' ),
				'content_classes' => 'elementor-panel-alert elementor-panel-alert-warning',
			]
		);

		$this->end_injection();

		$this->update_control(
			'show_result_count',
			[
				'default' => 'yes',
			]
		);

		$this->update_control(
			'section_query',
			[
				'type' => 'hidden',
			]
		);

		$this->update_control(
			Products_Renderer::QUERY_CONTROL_NAME . '_post_type',
			[
				'default' => 'current_query',
			]
		);

		$this->start_controls_section(
			'section_advanced',
			[
				'label' => __( 'Advanced', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'nothing_found_message',
			[
				'label' => __( 'Nothing Found Message', 'elementor-pro' ),
				'type' => Controls_Manager::TEXTAREA,
				'default' => __( 'It seems we can\'t find what you\'re looking for.', 'elementor-pro' ),
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_nothing_found_style',
			[
				'tab' => Controls_Manager::TAB_STYLE,
				'label' => __( 'Nothing Found Message', 'elementor-pro' ),
				'condition' => [
					'nothing_found_message!' => '',
				],
			]
		);

		$this->add_control(
			'nothing_found_color',
			[
				'label' => __( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'scheme' => [
					'type' => Schemes\Color::get_type(),
					'value' => Schemes\Color::COLOR_3,
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-products-nothing-found' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'nothing_found_typography',
				'scheme' => Schemes\Typography::TYPOGRAPHY_3,
				'selector' => '{{WRAPPER}} .elementor-products-nothing-found',
			]
		);

		$this->end_controls_section();
	}
}
