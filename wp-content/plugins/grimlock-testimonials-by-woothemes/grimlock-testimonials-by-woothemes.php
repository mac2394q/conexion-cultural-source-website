<?php
/*
 * Plugin name: Grimlock for Testimonials by WooThemes
 * Plugin URI:  http://www.themosaurus.com
 * Description: Adds integration features for Grimlock and Testimonials by WooThemes.
 * Author:      Themosaurus
 * Author URI:  http://www.themosaurus.com
 * Version:     1.1.0
 * License:     GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: grimlock-testimonials-by-woothemes
 * Domain Path: /languages
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'GRIMLOCK_TESTIMONIALS_BY_WOOTHEMES_VERSION',         '1.1.0' );
define( 'GRIMLOCK_TESTIMONIALS_BY_WOOTHEMES_PLUGIN_FILE',     __FILE__ );
define( 'GRIMLOCK_TESTIMONIALS_BY_WOOTHEMES_PLUGIN_DIR_PATH', plugin_dir_path( __FILE__ ) );
define( 'GRIMLOCK_TESTIMONIALS_BY_WOOTHEMES_PLUGIN_DIR_URL',  plugin_dir_url( __FILE__ ) );

// Initialize update checker
require 'libs/plugin-update-checker/plugin-update-checker.php';
Puc_v4_Factory::buildUpdateChecker(
	'http://files.themosaurus.com/grimlock-testimonials-by-woothemes/version.json',
	__FILE__,
	'grimlock-testimonials-by-woothemes'
);

/**
 * Load plugin.
 *
 * @since 1.0.0
 */
function grimlock_testimonials_by_woothemes_loaded() {
	require_once 'inc/class-grimlock-testimonials-by-woothemes.php';

	global $grimlock_testimonials_by_woothemes;
	$grimlock_testimonials_by_woothemes = new Grimlock_Testimonials_By_WooThemes();

	do_action( 'grimlock_testimonials_by_woothemes_loaded' );
}
add_action( 'grimlock_loaded', 'grimlock_testimonials_by_woothemes_loaded' );
