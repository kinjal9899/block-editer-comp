<?php
/*
Plugin Name: My Gutenberg Block
*/
/**
 * Enqueue scripts and styles.
 */
define( 'GF_PLUGIN_DIR_PATH', plugin_dir_url( __DIR__ ) );

function gutenberg_scripts(){
	//Styles
	wp_enqueue_style('gutenberg-slick-css', '/wp-content/plugins/myguten-block/src/slick/slick.css', array(), time());
	wp_enqueue_style('gutenberg-slick-theme-css', '/wp-content/plugins/myguten-block/src/slick/slick-theme.css', array(), time());
	//Scripts
	wp_enqueue_script('gutenberg-slick-js', '/wp-content/plugins/myguten-block/src/slick/slick.js', array('jquery'), time(), true);
	wp_enqueue_script('gutenberg-slick-js', '/wp-content/plugins/myguten-block/src/slick/slick.min.js', array('jquery'), time(), true);
	//wp_enqueue_script('gutenberg-jquery-js', '/wp-content/plugins/myguten-block/src/slick/jquery-1.11.0.min.js', array('jquery'), time(), true);
	//wp_enqueue_script('gutenberg-Migrate-js', '/wp-content/plugins/myguten-block/src/slick/Migrate-v1.2.1.js', array('jquery'), time(), true);
	wp_enqueue_script('gutenberg-custom-js', '/wp-content/plugins/myguten-block/src/custom.js', array('jquery'), time(),true);
}
add_action('wp_enqueue_scripts', 'gutenberg_scripts');

function my_custom_block_register_block() {

	// Register JavasScript File build/index.js
	wp_register_script(
		'my-custom-block',
		plugins_url( 'build/index.js', __FILE__ ),
		array( 'wp-blocks', 'wp-element', 'wp-editor' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' )
	);

	// Register editor style src/editor.css
	wp_register_style(
		'my-custom-block-editor-style',
		plugins_url( 'src/editor.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'src/editor.css' )
	);

	// Register front end block style src/style.css
	wp_register_style(
		'my-custom-block-frontend-style',
		plugins_url( 'src/style.css', __FILE__ ),
		array( ),
		filemtime( plugin_dir_path( __FILE__ ) . 'src/style.css' )
	);

	// Register your block
	register_block_type( 'myguten-block/myguten-block', array(
		'editor_script' => 'my-custom-block',
		'editor_style' => 'my-custom-block-editor-style',
		'style' => 'my-custom-block-frontend-style',
	) );

}

add_action( 'init', 'my_custom_block_register_block' );

register_post_meta( 'page', 'dc_references_block_field', array(
	'show_in_rest' => true,
	'single' => true,
	'type' => 'string',
) );

// register two new meta corresponding to attributes in JS
register_post_meta( 'page', 'dc_references_block_field_name', array(
	'show_in_rest' => true,
	'single' => true,
	'type' => 'string',
) );

register_post_meta( 'page', 'dc_references_block_field_desc', array(
	'show_in_rest' => true,
	'single' => true,
	'type' => 'string',
) );