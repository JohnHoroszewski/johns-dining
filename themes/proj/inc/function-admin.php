<?php

/* ==========================
      ADMIN PAGE
===========================*/


function jr_add_admin_page() {

    // Generate JR Theme Admin Page
    add_menu_page( 'General Information Options', 'JR Options', 'manage_options', 'jr_options', 'jr_theme_create_page', 'dashicons-admin-generic', 73 );

    // Gererate JR Admin Sub Pages
    add_submenu_page( 'jr_options', 'JR Theme Options', 'General', 'manage_options', 'jr_options', 'jr_theme_create_page' );

    add_submenu_page( 'jr_options', 'JR CSS Options', 'Custom CSS', 'manage_options', 'jr_manage_css', 'jr_theme_css_page' );
}

add_action( 'admin_menu', 'jr_add_admin_page' );

function jr_theme_create_page() {
    
    require_once( get_template_directory() . '/inc/templates/jr-admin.php' );

}

function jr_theme_css_page() {
    
    require_once( get_template_directory() . '/inc/templates/jr-css.php' );

}