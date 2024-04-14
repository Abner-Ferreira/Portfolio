import React from 'react';
import { useTranslation } from 'react-i18next';
import br from "../../assets/countries/br.svg";
import es from "../../assets/countries/es.svg";
import us from "../../assets/countries/us.svg";
import Select from 'react-select';
import './styles.css';

const languageOptions = [
    {
        name: "English",
        label: "English",
        value: "en",
        flag: us
    },
    {
        name: "Português",
        label: "Português",
        value: "ptBR",
        flag: br
    },
    {
        name: "Español",
        label: "Español",
        value: "es",
        flag: es
    },
]

function LanguageSwitcher() {

    const { t, i18n } = useTranslation()

    return (
        <>
            <div className="language-switcher">
                <span>{t("selectYourLanguage")}</span>


                <Select
                    defaultValue={languageOptions[0]}
                    onChange={(language) => {
                        i18n.changeLanguage(language.value)
                    }}
                    isMulti={false}
                    options={languageOptions}
                    formatOptionLabel={languageOption => (
                        <div className='language-div'>
                            <img src={languageOption.flag} alt="languageOptions-image" />
                            <span>{languageOption.label}</span>
                        </div>
                    )}
                    className='select-language'
                // styles={colourStyles}
                />
                {/* {languageOptions.map(languageOption => (




                    <button
                        key={languageOption.value}
                        onClick={() => {
                            i18n.changeLanguage(languageOption.value)
                        }}
                    >   
                        <img src={languageOption.flag} alt={languageOption.name} />
                        <span
                            style={{
                                fontWeight: i18n.language === languageOption.value ? "bold" : "normal",
                                textDecoration: i18n.language === languageOption.value ? "undeline" : "none"
                            }}
                        >{languageOption.name}</span>
                    </button>
                ))} */}
            </div>
        </>
    );
}

export default LanguageSwitcher;