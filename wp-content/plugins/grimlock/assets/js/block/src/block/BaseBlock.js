import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import {
    Disabled,
    PanelBody,
} from '@wordpress/components';
import {
    InspectorControls,
} from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render';
import { Fragment } from '@wordpress/element';

export default class BaseBlock {
    constructor( blockType, blockDomain, blockArgs ) {
        this.blockType   = blockType;
        this.blockDomain = blockDomain;
        this.blockBaseId = this.blockDomain.replace( /-/gi, '_' ) + '_' + this.blockType.replace( /-/gi, '_' );
        this.blockArgs   = blockArgs;

        this.init();
    }

    init() {
        registerBlockType( `${this.blockDomain}/${this.blockType}`, {
            ...this.blockArgs,
            edit: ( { attributes, setAttributes } ) => {
                const panels = wp.hooks.applyFilters( `${this.blockBaseId}_block_panels`, {} );

                return (
                    <>
                        <InspectorControls>

                            { Object.keys( panels ).map( ( panelKey ) => (
                                <PanelBody title={ panels[ panelKey ] } key={ panelKey } initialOpen={false}>
                                    { wp.hooks.applyFilters( `${this.blockBaseId}_block_${panelKey}_panel`, [], attributes, setAttributes )
                                        .map( ( item, key ) => <Fragment key={key}>{item}</Fragment> ) }
                                </PanelBody>
                            ) ) }

                        </InspectorControls>

                        <Disabled>
                            <ServerSideRender block={ `${this.blockDomain}/${this.blockType}` }
                                              attributes={ attributes } />
                        </Disabled>
                    </>
                );
            },
            save: () => null,
        } );
    }

    changeBlockPanels( panels ) {
        return {
            ...panels,
            general: __( 'General', 'grimlock' ),
            layout: __( 'Layout', 'grimlock' ),
            style: __( 'Style', 'grimlock' ),
        };
    }

    addSeparator( fields ) {
        fields.push( <hr /> );
        return fields;
    }
}
