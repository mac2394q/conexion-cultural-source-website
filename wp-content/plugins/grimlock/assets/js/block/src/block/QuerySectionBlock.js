import { __ } from '@wordpress/i18n';
import {
    TextControl,
    SelectControl,
    ToggleControl,
    __experimentalNumberControl as NumberControl,
    RadioControl,
} from '@wordpress/components';
import SectionBlock from './SectionBlock';
import SelectControlWithOptGroup from '../component/SelectControlWithOptGroup';

const { POST_TYPES, TAXONOMIES } = GrimlockQuerySectionBlock;
const { GRIMLOCK_PLUGIN_DIR_URL } = GrimlockSectionBlock;

export default class QuerySectionBlock extends SectionBlock {
    constructor( blockType = 'query-section', blockDomain = 'grimlock', blockArgs ) {
        blockArgs = {
            title: __( 'Grimlock Query Section', 'grimlock' ),
            icon: 'align-right',
            category: 'widgets',
            keywords: [ __( 'query section', 'grimlock' ) ],
            supports: {
                html: false,
                align: [ 'wide', 'full' ],
            },
            ...blockArgs,
        };
        super( blockType, blockDomain, blockArgs );

        /**
         * General Panel
         */
        wp.hooks.removeFilter( `${this.blockBaseId}_block_general_panel`, `${this.blockBaseId}_add_thumbnail_field`    );
        wp.hooks.removeFilter( `${this.blockBaseId}_block_general_panel`, `${this.blockBaseId}_add_separator_20_field` );
        wp.hooks.removeFilter( `${this.blockBaseId}_block_general_panel`, `${this.blockBaseId}_add_text_field`         );
        wp.hooks.removeFilter( `${this.blockBaseId}_block_general_panel`, `${this.blockBaseId}_add_wpautoped_field`    );

        /**
         * Query Panel
         */
        wp.hooks.addFilter( `${this.blockBaseId}_block_query_panel`,  `${this.blockBaseId}_add_post_type_field`,      this.addPostTypeField.bind( this ),     10  );
        wp.hooks.addFilter( `${this.blockBaseId}_block_query_panel`,  `${this.blockBaseId}_add_taxonomies_field`,     this.addTaxonomiesField.bind( this ),   20  );
        wp.hooks.addFilter( `${this.blockBaseId}_block_query_panel`,  `${this.blockBaseId}_add_meta_key_field`,       this.addMetaKeyField.bind( this ),      30  );
        wp.hooks.addFilter( `${this.blockBaseId}_block_query_panel`,  `${this.blockBaseId}_add_meta_compare_field`,   this.addMetaCompareField.bind( this ),  40  );
        wp.hooks.addFilter( `${this.blockBaseId}_block_query_panel`,  `${this.blockBaseId}_add_meta_value_field`,     this.addMetaValueField.bind( this ),    50  );
        wp.hooks.addFilter( `${this.blockBaseId}_block_query_panel`,  `${this.blockBaseId}_add_meta_value_num_field`, this.addMetaValueNumField.bind( this ), 60  );
        wp.hooks.addFilter( `${this.blockBaseId}_block_query_panel`,  `${this.blockBaseId}_add_posts_per_page_field`, this.addPostsPerPageField.bind( this ), 70  );
        wp.hooks.addFilter( `${this.blockBaseId}_block_query_panel`,  `${this.blockBaseId}_add_orderby_field`,        this.addOrderbyField.bind( this ),      80  );
        wp.hooks.addFilter( `${this.blockBaseId}_block_query_panel`,  `${this.blockBaseId}_add_order_field`,          this.addOrderField.bind( this ),        90  );

        /**
         * Layout Panel
         */
        wp.hooks.addFilter( `${this.blockBaseId}_block_layout_panel`, `${this.blockBaseId}_add_posts_layout_field`,    this.addPostsLayoutField.bind( this ),  9   );

        /**
         * Style Panel
         */
        wp.hooks.removeFilter( `${this.blockBaseId}_block_style_panel`, `${this.blockBaseId}_add_text_color_field` );
    }

    registerBlockPanels( panels ) {
        return {
            ...panels,
            general: __( 'General', 'grimlock' ),
            query: __( 'Query', 'grimlock' ),
            layout: __( 'Layout', 'grimlock' ),
            style: __( 'Style', 'grimlock' ),
        };
    }

    addPostTypeField( fields, attributes, setAttributes ) {
        fields.push(
            <SelectControl label={ __( 'Post Type', 'grimlock' ) }
                           value={ attributes.post_type }
                           onChange={ ( post_type ) => setAttributes( { post_type } ) }
                           options={ POST_TYPES } />
        );

        return fields;
    }

    addTaxonomiesField( fields, attributes, setAttributes ) {
        fields.push(
            <SelectControlWithOptGroup label={ __( 'Taxonomies', 'grimlock' ) }
                                       value={ attributes.taxonomies }
                                       onChange={ ( taxonomies ) => setAttributes( { taxonomies } ) }
                                       optgroups={ TAXONOMIES }
                                       multiple />
        );

        return fields;
    }

    addMetaKeyField( fields, attributes, setAttributes ) {
        fields.push(
            <TextControl label={ __( 'Meta Key', 'grimlock' ) }
                         value={ attributes.meta_key || '' }
                         onChange={ ( meta_key ) => setAttributes( { meta_key } ) } />
        );

        return fields;
    }

    addMetaCompareField( fields, attributes, setAttributes ) {
        fields.push(
            <SelectControl label={ __( 'Meta Compare', 'grimlock' ) }
                           value={ attributes.meta_compare }
                           onChange={ ( meta_compare ) => setAttributes( { meta_compare } ) }
                           options={ [
                               { value: '=',          label: '=' },
                               { value: '!=',         label: '!=' },
                               { value: '>',          label: '>' },
                               { value: '>=',         label: '>=' },
                               { value: '<',          label: '<' },
                               { value: '<=',         label: '<=' },
                               { value: 'LIKE',       label: 'LIKE' },
                               { value: 'NOT LIKE',   label: 'NOT LIKE' },
                               { value: 'NOT EXISTS', label: 'NOT EXISTS' },
                           ] } />
        );

        return fields;
    }

    addMetaValueField( fields, attributes, setAttributes ) {
        fields.push(
            <TextControl label={ __( 'Meta Value', 'grimlock' ) }
                         value={ attributes.meta_value || '' }
                         onChange={ ( meta_value ) => setAttributes( { meta_value } ) } />
        );

        return fields;
    }

    addMetaValueNumField( fields, attributes, setAttributes ) {
        fields.push(
            <ToggleControl label={ __( 'Treat meta value as a number', 'grimlock' ) }
                           checked={ !! attributes.meta_value_num }
                           onChange={ ( meta_value_num ) => setAttributes( { meta_value_num } ) } />
        );

        return fields;
    }

    addPostsPerPageField( fields, attributes, setAttributes ) {
        fields.push(
            <NumberControl label={ __( 'Number of posts to display', 'grimlock' ) }
                           value={ attributes.posts_per_page }
                           onChange={ ( posts_per_page ) => setAttributes( { posts_per_page } ) }
                           className="components-base-control" />
        );

        return fields;
    }

    addOrderbyField( fields, attributes, setAttributes ) {
        fields.push(
            <SelectControl label={ __( 'Order by', 'grimlock' ) }
                           value={ attributes.orderby }
                           onChange={ ( orderby ) => setAttributes( { orderby } ) }
                           options={[
                               { value: 'none',          label: __( 'No order', 'grimlock' ) },
                               { value: 'ID',            label: __( 'ID', 'grimlock' ) },
                               { value: 'author',        label: __( 'Author', 'grimlock' ) },
                               { value: 'title',         label: __( 'Title', 'grimlock' ) },
                               { value: 'name',          label: __( 'Slug', 'grimlock' ) },
                               { value: 'type',          label: __( 'Post type', 'grimlock' ) },
                               { value: 'date',          label: __( 'Creation date', 'grimlock' ) },
                               { value: 'modified',      label: __( 'Last modified date', 'grimlock' ) },
                               { value: 'parent',        label: __( 'Post/Page parent ID', 'grimlock' ) },
                               { value: 'rand',          label: __( 'Random order', 'grimlock' ) },
                               { value: 'comment_count', label: __( 'Number of comments', 'grimlock' ) },
                               { value: 'relevance',     label: __( 'Relevance (the ones matching the search best first)', 'grimlock' ) },
                               { value: 'menu_order',    label: __( 'Menu order', 'grimlock' ) },
                           ]} />
        );

        return fields;
    }

    addOrderField( fields, attributes, setAttributes ) {
        fields.push(
            <SelectControl label={ __( 'Order', 'grimlock' ) }
                           value={ attributes.order }
                           onChange={ ( order ) => setAttributes( { order } ) }
                           options={[
                               { value: 'ASC',  label: __( 'Ascending', 'grimlock' ) },
                               { value: 'DESC', label: __( 'Descending', 'grimlock' ) },
                           ]} />
        );

        return fields;
    }

    addPostsLayoutField( fields, attributes, setAttributes ) {
        fields.push(
            <RadioControl label={ __( 'Layout', 'grimlock' ) }
                          selected={ attributes.posts_layout || '' }
                          onChange={ ( posts_layout ) => setAttributes( { posts_layout } ) }
                          options={ [
                              { value: '12-cols-classic',      label: <img src={ GRIMLOCK_PLUGIN_DIR_URL + 'assets/images/posts-12-cols-classic.png' } alt="12-cols-classic" /> },
                              { value: '6-6-cols-classic',     label: <img src={ GRIMLOCK_PLUGIN_DIR_URL + 'assets/images/posts-6-6-cols-classic.png' } alt="6-6-cols-classic" /> },
                              { value: '4-4-4-cols-classic',   label: <img src={ GRIMLOCK_PLUGIN_DIR_URL + 'assets/images/posts-4-4-4-cols-classic.png' } alt="4-4-4-cols-classic" /> },
                              { value: '3-3-3-3-cols-classic', label: <img src={ GRIMLOCK_PLUGIN_DIR_URL + 'assets/images/posts-3-3-3-3-cols-classic.png' } alt="3-3-3-3-cols-classic" /> },
                              { value: '6-6-cols-lateral',     label: <img src={ GRIMLOCK_PLUGIN_DIR_URL + 'assets/images/posts-6-6-cols-lateral.png' } alt="6-6-cols-lateral" /> },
                              { value: '12-cols-lateral',      label: <img src={ GRIMLOCK_PLUGIN_DIR_URL + 'assets/images/posts-12-cols-lateral.png' } alt="12-cols-lateral" /> },
                          ] }
                          className="grimlock-radio-image" />
        );

        return fields;
    }

    addLayoutField( fields, attributes, setAttributes ) {
        fields.push(
            <RadioControl label={ __( 'Layout', 'grimlock' ) }
                          selected={ attributes.layout || '' }
                          onChange={ ( layout ) => setAttributes( { layout } ) }
                          options={ [
                              { value: '12-cols-center-left', label: <img src={ GRIMLOCK_PLUGIN_DIR_URL + 'assets/images/section-alignment-12-cols-center-left.png' } alt="12-cols-left" /> },
                              { value: '12-cols-center',      label: <img src={ GRIMLOCK_PLUGIN_DIR_URL + 'assets/images/section-alignment-12-cols-center.png' } alt="12-cols-center" /> },
                              { value: '12-cols-left',        label: <img src={ GRIMLOCK_PLUGIN_DIR_URL + 'assets/images/section-alignment-12-cols-left.png' } alt="12-cols-right" /> },
                          ] }
                          className="grimlock-radio-image" />
        );

        return fields;
    }


}
