<?php
/**
 * Template hooks for Grimlock for Testimonials by WooThemes
 *
 * @package grimlock-testimonials-by-woothemes/inc
 */

/**
 * Testimonial component hooks
 *
 * @see grimlock_testimonials_by_woothemes_testimonial_template
 *
 * @see grimlock_testimonials_by_woothemes_testimonial_thumbnail
 *
 * @see grimlock_testimonials_by_woothemes_testimonial_content
 * @see grimlock_testimonials_by_woothemes_testimonial_footer
 *
 * @see grimlock_testimonials_by_woothemes_testimonial_author
 * @see grimlock_edit_post_link
 *
 * @since 1.0.0
 */
add_action( 'grimlock_testimonials_by_woothemes_testimonial_template',         'grimlock_testimonials_by_woothemes_testimonial_template',  10, 1 );

add_action( 'grimlock_testimonials_by_woothemes_testimonial_before_card_body', 'grimlock_testimonials_by_woothemes_testimonial_thumbnail', 10, 1 );

add_action( 'grimlock_testimonials_by_woothemes_testimonial_card_body',        'grimlock_testimonials_by_woothemes_testimonial_content',   10, 1 );
add_action( 'grimlock_testimonials_by_woothemes_testimonial_card_body',        'grimlock_testimonials_by_woothemes_testimonial_footer',    20, 1 );

add_action( 'grimlock_testimonials_by_woothemes_testimonial_footer',           'grimlock_testimonials_by_woothemes_testimonial_author',    10, 1 );
add_action( 'grimlock_testimonials_by_woothemes_testimonial_footer',           'grimlock_edit_post_link',                                  20, 1 );