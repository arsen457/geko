import i18next from "i18next"
import { initReactI18next} from "react-i18next"

i18next
.use(initReactI18next)
.init({
    recource: {
        en:{
            translation: en
        },
        de:{
            translation: de
        },
        hy:{
            translation: hy
        },

    },
    ing: localStorage.getItem("language"),
    fallbackLng: "en"
})

export default i18next