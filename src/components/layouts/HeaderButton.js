import React from 'react'
import { useTranslation } from 'react-i18next'

const HeaderButton = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className="mx-auto">
                <a href="#about"><button className="see">{t('header.button')}<i className="fas fa-eye"></i></button></a>
            </div>
        </>
    )
}

export default HeaderButton
