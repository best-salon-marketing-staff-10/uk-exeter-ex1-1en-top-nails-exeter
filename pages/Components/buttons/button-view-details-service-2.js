import Link from 'next/link';
import { button } from '/pages/core/info';

export default function ButtonViewDetailsService2(){
    return(
        <>
            <div className="button-view-details-service-2-to-mobile">
                <Link legacyBehavior href={button.button7LinkToMobile}>
                    <div className="button-model-2">
                        {button.button7Content}
                    </div>
                </Link>
            </div>
            <div className="button-view-details-service-2-to-tablet">
                <Link legacyBehavior href={button.button7LinkToTablet}>
                    <div className="button-model-2">
                        {button.button7Content}
                    </div>
                </Link>
            </div>
            <div className="button-view-details-service-2-to-desktop">
                <Link legacyBehavior href={button.button7LinkToDesktop}>
                    <div className="button-model-2">
                        {button.button7Content}
                    </div>
                </Link>
            </div>
        </>
    )
}