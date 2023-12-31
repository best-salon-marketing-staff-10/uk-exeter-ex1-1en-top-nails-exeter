import Link from 'next/link';
import { button } from '/pages/core/info';

export default function ButtonViewDetailsService7(){
    return(
        <>
            <div className="button-view-details-service-7-to-mobile">
                <Link legacyBehavior href={button.button12LinkToMobile}>
                    <div className="button-model-2">
                        {button.button12Content}
                    </div>
                </Link>
            </div>
            <div className="button-view-details-service-7-to-tablet">
                <Link legacyBehavior href={button.button12LinkToTablet}>
                    <div className="button-model-2">
                        {button.button12Content}
                    </div>
                </Link>
            </div>
            <div className="button-view-details-service-7-to-desktop">
                <Link legacyBehavior href={button.button12LinkToDesktop}>
                    <div className="button-model-2">
                        {button.button12Content}
                    </div>
                </Link>
            </div>
        </>
    )
}