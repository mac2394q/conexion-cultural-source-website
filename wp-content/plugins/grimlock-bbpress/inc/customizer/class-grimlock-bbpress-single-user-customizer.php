<?php
/**
 * Grimlock_bbPress_Single_User_Customizer Class
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
class Grimlock_bbPress_Single_User_Customizer {
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
		return function_exists( 'bbp_is_user_home' ) && bbp_is_user_home() ||
		       function_exists( 'bbp_is_user_home_edit' ) && bbp_is_user_home_edit() ||
		       function_exists( 'bbp_is_single_user' ) && bbp_is_single_user() ||
		       function_exists( 'bbp_is_single_user_edit' ) && bbp_is_single_user_edit() ||
		       function_exists( 'bbp_is_single_user_profile' ) && bbp_is_single_user_profile() ||
		       function_exists( 'bbp_is_single_user_topics' ) && bbp_is_single_user_topics() ||
		       function_exists( 'bbp_is_single_user_replies' ) && bbp_is_single_user_replies() ||
		       $default;
	}

	/**
	 * Change the title for the Custom Header.
	 *
	 * @since 1.0.0
	 *
	 * @param  array $args The array of arguments for the Custom Header.
	 *
	 * @return array       The filtered array of arguments for the Custom Header.
	 */
	public function add_custom_header_args( $args ) {
		if ( $this->is_template() ) {
			$args['title']    = bbp_get_displayed_user_field( 'display_name' );
			$args['subtitle'] = '';
		}
		return $args;
	}
}

return new Grimlock_bbPress_Single_User_Customizer();
