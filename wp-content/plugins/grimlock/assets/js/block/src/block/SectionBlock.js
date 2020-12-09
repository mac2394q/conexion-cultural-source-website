import { __ } from '@wordpress/i18n';
import {
    TextControl,
    TextareaControl,
    RadioControl,
    RangeControl,
    ToggleControl,
    SelectControl,
} from '@wordpress/components';
import {
    __experimentalColorGradientControl as ColorGradientControl,
} from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import ImageSelector from '../component/ImageSelector';
import ColorPickerControl from '../component/ColorPickerControl';
import BaseBlock from './BaseBlock';

const { GRIMLOCK_PLUGIN_DIR_URL } = GrimlockSectionBlock;

export default class SectionBlock extends BaseBlock {
    constructor( blockType = 'section', blockDomain = 'grimlock', blockArgs ) {
        blockArgs = {
            title: __( 'Grimlock Section', 'grimlock' ),
            icon: 'align-left',
            category: 'widgets',
            keywords: [ __( 'section', 'grimlock' ) ],
            supports: {
                html: false,
                align: [ 'wide', 'full' ],
            },
            ...blockArgs,
        };
        super( blockType, blockDomain, blockArgs );

        // Register Block Panels
        wp.hooks.addFilter( `${this.blockBaseId}_block_panels`, `${this.blockBaseId}_change_block_panels`, this.registerBlockPanels.bind( this ) );

        /**
         * General Panel
         */
        wp.hooks.addFilter( `${this.blockBaseId}_block_general_panel`, `${this.blockBaseId}_add_thumbnail_field`,           this.addThumbnailField.bind( this ),         10  );
        wp.hooks.addFilter( `${this.blockBaseId}_block_general_panel`, `${this.blockBaseId}_add_separator_20_field`,        this.addSeparator.bind( this ),              20  );
        wp.hooks.addFilter( `${this.blockBaseId}_block_general_panel`, `${this.blockBaseId}_add_title_field`,               this.addTitleField.bind( this ),             30  );
        wp.hooks.addFilter( `${this.blockBaseId}_block_general_panel`, `${this.blockBaseId}_add_subtitle_field`,            this.addSubtitleField.bind( this ),          40  );
        wp.hooks.addFilter( `${this.blockBaseId}_block_general_panel`, `${this.blockBaseId}_add_text_field`,                this.addTextField.bind( this ),              50  );
        wp.hooks.addFilter( `${this.blockBaseId}_block_general_panel`, `${this.blockBaseId}_add_wpautoped_field`,           this.addWpautopedField.bind( this ),         60  );
        wp.hooks.addFilter( `${this.blockBaseId}_block_general_panel`, `${this.blockBaseId}_add_separator_70_field`,        this.addSeparator.bind( this ),              70  );
        wp.hooks.addFilter( `${this.blockBaseId}_block_general_panel`, `${this.blockBaseId}_add_button_displayed_field`,    this.addButtonDisplayedField.bind( this ),   80  );
        wp.hooks.addFilter( `${this.blockBaseId}_block_general_panel`, `${this.blockBaseId}_add_button_text_field`,         this.addButtonTextField.bind( this ),        90  );
        wp.hooks.addFilter( `${this.blockBaseId}_block_general_panel`, `${this.blockBaseId}_add_button_link_field`,         this.addButtonLinkField.bind( this ),         100 );
        wp.hooks.addFilter( `${this.blockBaseId}_block_general_panel`, `${this.blockBaseId}_add_button_target_blank_field`, this.addButtonTargetBlankField.bind( this ), 110 );

        /**
         * Layout Panel
         */
        wp.hooks.addFilter( `${this.blockBaseId}_block_layout_panel`,  `${this.blockBaseId}_add_layout_field`,              this.addLayoutField.bind( this ),            10  );
        wp.hooks.addFilter( `${this.blockBaseId}_block_layout_panel`,  `${this.blockBaseId}_add_container_layout_field`,    this.addContainerLayoutField.bind( this ),   20  );

        /**
         * Style Panel
         */
        wp.hooks.addFilter( `${this.blockBaseId}_block_style_panel`,   `${this.blockBaseId}_add_background_image_field`,    this.addBackgroundImageField.bind( this ),    10  );
        wp.hooks.addFilter( `${this.blockBaseId}_block_style_panel`,   `${this.blockBaseId}_add_separator_20_field`,        this.addSeparator.bind( this ),               20  );
        wp.hooks.addFilter( `${this.blockBaseId}_block_style_panel`,   `${this.blockBaseId}_add_margin_top_field`,          this.addMarginTopField.bind( this ),          30  );
        wp.hooks.addFilter( `${this.blockBaseId}_block_style_panel`,   `${this.blockBaseId}_add_margin_bottom_field`,       this.addMarginBottomField.bind( this ),       40  );
        wp.hooks.addFilter( `${this.blockBaseId}_block_style_panel`,   `${this.blockBaseId}_add_padding_y_field`,           this.addPaddingYField.bind( this ),           50  );
        wp.hooks.addFilter( `${this.blockBaseId}_block_style_panel`,   `${this.blockBaseId}_add_separator_60_field`,        this.addSeparator.bind( this ),               60  );
        wp.hooks.addFilter( `${this.blockBaseId}_block_style_panel`,   `${this.blockBaseId}_add_background_color_field`,    this.addBackgroundColorField.bind( this ),    70  );
        wp.hooks.addFilter( `${this.blockBaseId}_block_style_panel`,   `${this.blockBaseId}_add_background_gradient_field`, this.addBackgroundGradientField.bind( this ), 80  );
        wp.hooks.addFilter( `${this.blockBaseId}_block_style_panel`,   `${this.blockBaseId}_add_separator_90_field`,        this.addSeparator.bind( this ),               90  );
        wp.hooks.addFilter( `${this.blockBaseId}_block_style_panel`,   `${this.blockBaseId}_add_border_top_width_field`,    this.addBorderTopWidthField.bind( this ),     100 );
        wp.hooks.addFilter( `${this.blockBaseId}_block_style_panel`,   `${this.blockBaseId}_add_border_top_color_field`,    this.addBorderTopColorField.bind( this ),     110 );
        wp.hooks.addFilter( `${this.blockBaseId}_block_style_panel`,   `${this.blockBaseId}_add_border_bottom_width_field`, this.addBorderBottomWidthField.bind( this ),  120 );
        wp.hooks.addFilter( `${this.blockBaseId}_block_style_panel`,   `${this.blockBaseId}_add_border_bottom_color_field`, this.addBorderBottomColorField.bind( this ),  130 );
        wp.hooks.addFilter( `${this.blockBaseId}_block_style_panel`,   `${this.blockBaseId}_add_separator_140_field`,       this.addSeparator.bind( this ),               140 );
        wp.hooks.addFilter( `${this.blockBaseId}_block_style_panel`,   `${this.blockBaseId}_add_title_format_field`,        this.addTitleFormatField.bind( this ),        150 );
        wp.hooks.addFilter( `${this.blockBaseId}_block_style_panel`,   `${this.blockBaseId}_add_title_color_field`,         this.addTitleColorField.bind( this ),         160 );
        wp.hooks.addFilter( `${this.blockBaseId}_block_style_panel`,   `${this.blockBaseId}_add_subtitle_format_field`,     this.addSubtitleFormatField.bind( this ),     170 );
        wp.hooks.addFilter( `${this.blockBaseId}_block_style_panel`,   `${this.blockBaseId}_add_subtitle_color_field`,      this.addSubtitleColorField.bind( this ),      180 );
        wp.hooks.addFilter( `${this.blockBaseId}_block_style_panel`,   `${this.blockBaseId}_add_text_color_field`,          this.addTextColorField.bind( this ),          190 );
        wp.hooks.addFilter( `${this.blockBaseId}_block_style_panel`,   `${this.blockBaseId}_add_separator_200_field`,       this.addSeparator.bind( this ),               200 );
        wp.hooks.addFilter( `${this.blockBaseId}_block_style_panel`,   `${this.blockBaseId}_add_button_format_field`,       this.addButtonFormatField.bind( this ),       210 );
        wp.hooks.addFilter( `${this.blockBaseId}_block_style_panel`,   `${this.blockBaseId}_add_button_size_field`,         this.addButtonSizeField.bind( this ),         220 );
    }

    registerBlockPanels( panels ) {
        return {
            ...panels,
            general: __( 'General', 'grimlock' ),
            layout: __( 'Layout', 'grimlock' ),
            style: __( 'Style', 'grimlock' ),
        };
    }

    addThumbnailField( fields, attributes, setAttributes ) {
        fields.push(
            <ImageSelector label={ __( 'Thumbnail', 'grimlock' ) }
                           value={ attributes.thumbnail || 0 }
                           onChange={ ( thumbnail ) => setAttributes( { thumbnail } ) } />
        );

        return fields;
    }

    addTitleField( fields, attributes, setAttributes ) {
        fields.push(
            <TextControl label={ __( 'Title', 'grimlock' ) }
                         value={ attributes.title || '' }
                         onChange={ ( title ) => setAttributes( { title } ) } />
        );

        return fields;
    }

    addSubtitleField( fields, attributes, setAttributes ) {
        fields.push(
            <TextControl label={ __( 'Subtitle', 'grimlock' ) }
                         value={ attributes.subtitle || '' }
                         onChange={ ( subtitle ) => setAttributes( { subtitle } ) } />
        );

        return fields;
    }

    addTextField( fields, attributes, setAttributes ) {
        fields.push(
            <TextareaControl label={ __( 'Text', 'grimlock' ) }
                             value={ attributes.text || '' }
                             onChange={ ( text ) => setAttributes( { text } ) } />
        );

        return fields;
    }

    addWpautopedField( fields, attributes, setAttributes ) {
        fields.push(
            <ToggleControl label={ __( 'Automatically add paragraphs', 'grimlock' ) }
                           checked={ !! attributes.text_wpautoped }
                           onChange={ ( text_wpautoped ) => setAttributes( { text_wpautoped } ) } />
        );

        return fields;
    }

    addButtonDisplayedField( fields, attributes, setAttributes ) {
        fields.push(
            <ToggleControl label={ __( 'Display button', 'grimlock' ) }
                           checked={ !! attributes.button_displayed }
                           onChange={ ( button_displayed ) => setAttributes( { button_displayed } ) } />
        );

        return fields;
    }

    addButtonTextField( fields, attributes, setAttributes ) {
        if ( attributes.button_displayed ) {
            fields.push(
                <TextControl label={ __( 'Button Text', 'grimlock' ) }
                             value={ attributes.button_text || '' }
                             onChange={( button_text ) => setAttributes( { button_text } )}/>
            );
        }

        return fields;
    }

    addButtonLinkField( fields, attributes, setAttributes ) {
        if ( attributes.button_displayed ) {
            fields.push(
                <TextControl label={ __( 'Button Link', 'grimlock' ) }
                             value={ attributes.button_link || '' }
                             onChange={( button_link ) => setAttributes( { button_link } )} />
            );
        }

        return fields;
    }

    addButtonTargetBlankField( fields, attributes, setAttributes ) {
        if ( attributes.button_displayed ) {
            fields.push(
                <ToggleControl label={ __( 'Open link in a new page', 'grimlock' ) }
                               checked={ !!attributes.button_target_blank }
                               onChange={( button_target_blank ) => setAttributes( { button_target_blank } )} />
            );
        }

        return fields;
    }

    addLayoutField( fields, attributes, setAttributes ) {
        fields.push(
            <RadioControl label={ __( 'Layout', 'grimlock' ) }
                          selected={ attributes.layout || '' }
                          onChange={ ( layout ) => setAttributes( { layout } ) }
                          options={ [
                              { value: '12-cols-left',                 label: <img src={ GRIMLOCK_PLUGIN_DIR_URL + 'assets/images/section-12-cols-left.png' } alt="12-cols-left" /> },
                              { value: '12-cols-center',               label: <img src={ GRIMLOCK_PLUGIN_DIR_URL + 'assets/images/section-12-cols-center.png'} alt="12-cols-center" /> },
                              { value: '12-cols-right',                label: <img src={ GRIMLOCK_PLUGIN_DIR_URL + 'assets/images/section-12-cols-right.png'} alt="12-cols-right" /> },
                              { value: '6-6-cols-left',                label: <img src={ GRIMLOCK_PLUGIN_DIR_URL + 'assets/images/section-6-6-cols-left.png'} alt="6-6-cols-left" /> },
                              { value: '6-6-cols-left-reverse',        label: <img src={ GRIMLOCK_PLUGIN_DIR_URL + 'assets/images/section-6-6-cols-left-reverse.png'} alt="6-6-cols-left-reverse" /> },
                              { value: '4-8-cols-left',                label: <img src={ GRIMLOCK_PLUGIN_DIR_URL + 'assets/images/section-4-8-cols-left.png'} alt="4-8-cols-left" /> },
                              { value: '4-8-cols-left-reverse',        label: <img src={ GRIMLOCK_PLUGIN_DIR_URL + 'assets/images/section-4-8-cols-left-reverse.png'} alt="4-8-cols-left-reverse" /> },
                              { value: '6-6-cols-left-modern',         label: <img src={ GRIMLOCK_PLUGIN_DIR_URL + 'assets/images/section-6-6-cols-left-modern.png'} alt="6-6-cols-left-modern" /> },
                              { value: '6-6-cols-left-reverse-modern', label: <img src={ GRIMLOCK_PLUGIN_DIR_URL + 'assets/images/section-6-6-cols-left-reverse-modern.png'} alt="6-6-cols-left-reverse-modern" /> },
                              { value: '8-4-cols-left-modern',         label: <img src={ GRIMLOCK_PLUGIN_DIR_URL + 'assets/images/section-8-4-cols-left-modern.png'} alt="8-4-cols-left-modern" /> },
                              { value: '8-4-cols-left-reverse-modern', label: <img src={ GRIMLOCK_PLUGIN_DIR_URL + 'assets/images/section-8-4-cols-left-reverse-modern.png'} alt="8-4-cols-left-reverse-modern" /> },
                          ] }
                          className="grimlock-radio-image" />
        );

        return fields;
    }

    addContainerLayoutField( fields, attributes, setAttributes ) {
        fields.push(
            <RadioControl label={ __( 'Spread', 'grimlock' ) }
                          selected={ attributes.container_layout || '' }
                          onChange={ ( container_layout ) => setAttributes( { container_layout } ) }
                          options={ [
                              { value: 'classic',  label: <img src={ GRIMLOCK_PLUGIN_DIR_URL + 'assets/images/region-container-classic.png'} alt="classic" /> },
                              { value: 'fluid',    label: <img src={ GRIMLOCK_PLUGIN_DIR_URL + 'assets/images/region-container-fluid.png'} alt="fluid" /> },
                              { value: 'narrow',   label: <img src={ GRIMLOCK_PLUGIN_DIR_URL + 'assets/images/region-container-narrow.png'} alt="narrow" /> },
                              { value: 'narrower', label: <img src={ GRIMLOCK_PLUGIN_DIR_URL + 'assets/images/region-container-narrower.png'} alt="narrower" /> },
                          ] }
                          className="grimlock-radio-image" />
        );

        return fields;
    }

    addBackgroundImageField( fields, attributes, setAttributes ) {
        fields.push(
            <ImageSelector label={ __( 'Background Image', 'grimlock' ) }
                           value={ attributes.background_image || 0 }
                           onChange={ ( background_image ) => setAttributes( { background_image } ) } />
        );

        return fields;
    }

    addMarginTopField( fields, attributes, setAttributes ) {
        fields.push(
            <RangeControl label={ __( 'Top Margin', 'grimlock' ) }
                          value={ attributes.margin_top || 0 }
                          onChange={ ( margin_top ) => setAttributes( { margin_top } ) }
                          min={-25}
                          max={25} />
        );

        return fields;
    }

    addMarginBottomField( fields, attributes, setAttributes ) {
        fields.push(
            <RangeControl label={ __( 'Bottom Margin', 'grimlock' ) }
                          value={ attributes.margin_bottom || 0 }
                          onChange={ ( margin_bottom ) => setAttributes( { margin_bottom } ) }
                          min={-25}
                          max={25} />
        );

        return fields;
    }

    addPaddingYField( fields, attributes, setAttributes ) {
        fields.push(
            <RangeControl label={ __( 'Vertical Padding', 'grimlock' ) }
                          value={ attributes.padding_y || 0 }
                          onChange={ ( padding_y ) => setAttributes( { padding_y } ) }
                          min={0}
                          max={25} />
        );

        return fields;
    }

    addBackgroundColorField( fields, attributes, setAttributes ) {
        fields.push(
            <ColorPickerControl label={ __( 'Background Color', 'grimlock' ) }
                                value={ attributes.background_color || '#ffffff' }
                                onChange={ ( background_color ) => setAttributes( { background_color } ) } />
        );

        return fields;
    }

    addBackgroundGradientDisplayedField( fields, attributes, setAttributes ) {
        fields.push(
            <ToggleControl label={ __( 'Add Gradient to Background Color', 'grimlock' ) }
                           checked={ !!attributes.background_gradient_displayed }
                           onChange={( background_gradient_displayed ) => setAttributes( { background_gradient_displayed } )} />
        );

        return fields;
    }

    addBackgroundGradientField( fields, attributes, setAttributes ) {
        const [ state, setState ] = useState( { gradientDisplayed: false } );

        fields.push(
            <>
                <ToggleControl label={ __( 'Add Gradient to Background Color', 'grimlock' ) }
                               checked={ !!state.gradientDisplayed }
                               onChange={ ( gradientDisplayed ) => {
                                   if ( ! gradientDisplayed )
                                       setAttributes( { background_gradient: '' } );

                                   setState( { gradientDisplayed } );
                               } } />

                { state.gradientDisplayed &&
                <ColorGradientControl label={ __( 'Background Gradient', 'grimlock' ) }
                                      gradientValue={ attributes.background_gradient || '' }
                                      onGradientChange={ ( background_gradient ) => setAttributes( { background_gradient } ) } /> }
            </>
        );

        return fields;
    }

    addBorderTopWidthField( fields, attributes, setAttributes ) {
        fields.push(
            <RangeControl label={ __( 'Border Top Width', 'grimlock' ) }
                          value={ attributes.border_top_width || 0 }
                          onChange={ ( border_top_width ) => setAttributes( { border_top_width } ) }
                          min={0}
                          max={25} />
        );

        return fields;
    }

    addBorderTopColorField( fields, attributes, setAttributes ) {
        if ( attributes.border_top_width > 0 ) {
            fields.push(
                <ColorPickerControl label={__( 'Border Top Color', 'grimlock' )}
                                    value={attributes.border_top_color || '#ffffff'}
                                    onChange={( border_top_color ) => setAttributes( { border_top_color } )}/>
            );
        }

        return fields;
    }

    addBorderBottomWidthField( fields, attributes, setAttributes ) {
        fields.push(
            <RangeControl label={ __( 'Border Bottom Width', 'grimlock' ) }
                          value={ attributes.border_bottom_width || 0 }
                          onChange={ ( border_bottom_width ) => setAttributes( { border_bottom_width } ) }
                          min={0}
                          max={25} />
        );

        return fields;
    }

    addBorderBottomColorField( fields, attributes, setAttributes ) {
        if ( attributes.border_bottom_width > 0 ) {
            fields.push(
                <ColorPickerControl label={__( 'Border Bottom Color', 'grimlock' )}
                                    value={attributes.border_bottom_color || '#ffffff'}
                                    onChange={( border_bottom_color ) => setAttributes( { border_bottom_color } )}/>
            );
        }

        return fields;
    }

    addTitleFormatField( fields, attributes, setAttributes ) {
        fields.push(
            <SelectControl label={ __( 'Title Format', 'grimlock' ) }
                           value={ attributes.title_format }
                           onChange={ ( title_format ) => setAttributes( { title_format } ) }
                           options={ [
                               { value: 'display-1', label: __( 'Heading 1',  'grimlock' ) },
                               { value: 'display-2', label: __( 'Heading 2',  'grimlock' ) },
                               { value: 'display-3', label: __( 'Heading 3',  'grimlock' ) },
                               { value: 'display-4', label: __( 'Heading 4',  'grimlock' ) },
                               { value: 'lead',      label: __( 'Subheading', 'grimlock' ) },
                           ] } />
        );

        return fields;
    }

    addTitleColorField( fields, attributes, setAttributes ) {
        fields.push(
            <ColorPickerControl label={ __( 'Title Color', 'grimlock' ) }
                                value={ attributes.title_color || '#ffffff' }
                                onChange={ ( title_color ) => setAttributes( { title_color } ) } />
        );

        return fields;
    }

    addSubtitleFormatField( fields, attributes, setAttributes ) {
        fields.push(
            <SelectControl label={ __( 'Subtitle Format', 'grimlock' ) }
                           value={ attributes.subtitle_format }
                           onChange={ ( subtitle_format ) => setAttributes( { subtitle_format } ) }
                           options={ [
                               { value: 'display-1', label: __( 'Heading 1',  'grimlock' ) },
                               { value: 'display-2', label: __( 'Heading 2',  'grimlock' ) },
                               { value: 'display-3', label: __( 'Heading 3',  'grimlock' ) },
                               { value: 'display-4', label: __( 'Heading 4',  'grimlock' ) },
                               { value: 'lead',      label: __( 'Subheading', 'grimlock' ) },
                           ] } />
        );

        return fields;
    }

    addSubtitleColorField( fields, attributes, setAttributes ) {
        fields.push(
            <ColorPickerControl label={ __( 'Subtitle Color', 'grimlock' ) }
                                value={ attributes.subtitle_color || '#ffffff' }
                                onChange={ ( subtitle_color ) => setAttributes( { subtitle_color } ) } />
        );

        return fields;
    }

    addTextColorField( fields, attributes, setAttributes ) {
        fields.push(
            <ColorPickerControl label={ __( 'Text Color', 'grimlock' ) }
                                value={ attributes.text_color || '#ffffff' }
                                onChange={ ( text_color ) => setAttributes( { text_color } ) } />
        );

        return fields;
    }

    addButtonFormatField( fields, attributes, setAttributes ) {
        if ( attributes.button_displayed ) {
            fields.push(
                <SelectControl label={ __( 'Button Format', 'grimlock' ) }
                               value={ attributes.button_format }
                               onChange={ ( button_format ) => setAttributes( { button_format } ) }
                               options={[
                                   { value: 'btn-primary',   label: __( 'Primary', 'grimlock' ) },
                                   { value: 'btn-secondary', label: __( 'Secondary', 'grimlock' ) },
                                   { value: 'btn-link',      label: __( 'Link', 'grimlock' ) },
                               ]} />
            );
        }

        return fields;
    }

    addButtonSizeField( fields, attributes, setAttributes ) {
        if ( attributes.button_displayed ) {
            fields.push(
                <SelectControl label={ __( 'Button Size', 'grimlock' ) }
                               value={ attributes.button_size }
                               onChange={ ( button_size ) => setAttributes( { button_size } ) }
                               options={[
                                   { value: 'btn-sm',    label: __( 'Small', 'grimlock' ) },
                                   { value: '',          label: __( 'Regular', 'grimlock' ) },
                                   { value: 'btn-lg',    label: __( 'Large', 'grimlock' ) },
                                   { value: 'btn-block', label: __( 'Full Width', 'grimlock' ) },
                               ]} />
            );
        }

        return fields;
    }
}
