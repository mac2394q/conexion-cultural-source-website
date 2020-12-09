<?php
/**
 * Template functions for Grimlock for Testimonials by WooThemes
 *
 * @package grimlock-testimonials-by-woothemes/inc
 */

/**
 * Prints HTML for the testimonial template
 *
 * @param array $args The array of arguments from the component
 */
function grimlock_testimonials_by_woothemes_testimonial_template( $args ) {
	?>
	<div class="card testimonial__card" itemprop="review" itemscope="" itemtype="http://schema.org/Review">
		<?php
		/**
		 * Hook: grimlock_testimonials_by_woothemes_testimonial_before_card_body
		 *
		 * @hooked: grimlock_testimonials_by_woothemes_testimonial_thumbnail - 10
		 */
		do_action( 'grimlock_testimonials_by_woothemes_testimonial_before_card_body', $args ); ?>

		<div class="card-body">
			<?php
			/**
			 * Hook: grimlock_testimonials_by_woothemes_testimonial_card_body
			 *
			 * @hooked grimlock_testimonials_by_woothemes_testimonial_content - 10
			 * @hooked grimlock_testimonials_by_woothemes_testimonial_footer  - 20
			 */
			do_action( 'grimlock_testimonials_by_woothemes_testimonial_card_body', $args ); ?>
		</div><!-- .card-body -->

		<?php
		/**
		 * Hook: grimlock_testimonials_by_woothemes_testimonial_after_card_body
		 */
		do_action( 'grimlock_testimonials_by_woothemes_testimonial_after_card_body', $args ); ?>
	</div><!-- .card -->
	<?php
}

/**
 * Prints HTML for the testimonial thumbnail
 *
 * @param array $args The array of arguments from the component
 */
function grimlock_testimonials_by_woothemes_testimonial_thumbnail( $args ) {
	if ( ! empty( $args['post_thumbnail_displayed'] ) ) :
		$size = $args['post_thumbnail_size'];
		$attr = $args['post_thumbnail_attr'];

		if ( has_post_thumbnail() ) :
			the_post_thumbnail( $size, $attr );
		endif;
	endif;
}

/**
 * Prints HTML for the testimonial content
 *
 * @param array $args The array of arguments from the component
 */
function grimlock_testimonials_by_woothemes_testimonial_content() {
	?>
	<div class="clearfix">
		<blockquote class="blockquote" itemprop="reviewBody"><?php the_content(); ?></blockquote>
	</div><!-- .entry-content -->
	<?php
}

/**
 * Prints HTML for the testimonial footer
 *
 * @param array $args The array of arguments from the component
 */
function grimlock_testimonials_by_woothemes_testimonial_footer( $args ) {
	?>
	<footer class="clearfix">
		<?php
		/**
		 * Hook: grimlock_testimonials_by_woothemes_testimonial_footer
		 *
		 * @hooked grimlock_testimonials_by_woothemes_testimonial_author - 10
		 * @hooked grimlock_edit_post_link                               - 20
		 */
		do_action( 'grimlock_testimonials_by_woothemes_testimonial_footer', $args ); ?>
	</footer>
	<?php
}

/**
 * Prints HTML for the testimonial author
 *
 * @param array $args The array of arguments from the component
 */
function grimlock_testimonials_by_woothemes_testimonial_author( $args ) {
	?>
	<cite class="author" itemprop="author" itemscope="" itemtype="http://schema.org/Person">
		<?php
		the_title( '<h3 class="entry-title" itemprop="name">', '</h3>' );

		if ( ! empty( $args['byline_displayed'] ) ) : ?>
			<span class="title" itemprop="jobTitle"><?php echo get_post_meta( get_the_ID(), '_byline', true ); ?></span>
		<?php endif;

		if ( ! empty( $args['url_displayed'] ) ) :
			$url = get_post_meta( get_the_ID(), '_url', true ); ?>
			<span class="url">
				<a href="<?php echo esc_url( $url ); ?>" itemprop="url">
					<?php echo $url; ?>
				</a>
			</span>
		<?php endif; ?>
	</cite>
	<?php
}