<?php
// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class Grimlock_Base_Block
 *
 * @author  themosaurus
 * @since   1.3.5
 * @package grimlock/inc
 */
abstract class Grimlock_Base_Block {
	/**
	 * @var string Block type
	 */
	protected $type;

	/**
	 * @var string Block domain. Used to generate js handle, filenames, text-domain, ...
	 */
	protected $domain;

	/**
	 * @var string Block base id. Used to generate hook names.
	 */
	protected $id_base;

	/**
	 * @var string Block js handle
	 */
	protected $js_handle;

	/**
	 * @var string Plugin directory path. Used to include files.
	 */
	protected $plugin_dir_path;

	/**
	 * @var string Plugin directory url. Used to enqueue assets.
	 */
	protected $plugin_dir_url;

	/**
	 * Setup class.
	 *
	 * @param string $type Block type
	 * @param string $domain Block domain
	 *
	 * @since 1.3.5
	 */
	public function __construct( $type, $domain ) {
		$this->type            = $type;
		$this->domain          = $domain;
		$this->js_handle       = "{$this->domain}-{$this->type}-block";
		$this->id_base         = str_replace( '-', '_', $this->domain ) . '_' . str_replace( '-', '_', $this->type );

		$constant_prefix       = strtoupper( str_replace( '-', '_', $this->domain ) );
		$this->plugin_dir_path = constant( $constant_prefix . "_PLUGIN_DIR_PATH" );
		$this->plugin_dir_url  = constant( $constant_prefix . "_PLUGIN_DIR_URL" );

		add_action( 'init', array( $this, 'register_block' ), 10 );
	}

	/**
	 * Register the block in Gutenberg
	 */
	public function register_block() {
		// Automatically load script dependencies and version from webpack compiled file
		$asset_file = include( trailingslashit( $this->plugin_dir_path ) . "assets/js/block/build/{$this->type}-block.asset.php");

		wp_register_script(
			$this->js_handle,
			trailingslashit( $this->plugin_dir_url ) . "assets/js/block/build/{$this->type}-block.js",
			$asset_file['dependencies'],
			$asset_file['version']
		);
		wp_set_script_translations( $this->js_handle, $this->domain, trailingslashit( $this->plugin_dir_path ) . 'languages' );

		register_block_type( "{$this->domain}/{$this->type}", array(
			'editor_script'   => $this->js_handle,
			'editor_style'    => 'grimlock-blocks',
			'render_callback' => array( $this, 'render_block' ),
			'attributes'      => apply_filters( "{$this->id_base}_block_supported_attributes", $this->get_supported_attributes() ),
		) );
	}

	/**
	 * Render the Gutenberg block
	 *
	 * @param $attributes
	 * @param $content
	 *
	 * @return string Block HTML
	 */
	public abstract function render_block( $attributes, $content );

	/**
	 * Get the list of supported attributes for this block including type and default value for each attribute
	 *
	 * @return array Array of supported attributes
	 */
	protected abstract function get_supported_attributes();
}
