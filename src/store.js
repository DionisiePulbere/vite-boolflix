import { reactive } from "vue";

export const store = reactive({
    movies: [],
    series: [],
    filterInput: "",
    flags: [
        {
            language: "it",
            emoji: "🇮🇹"
        },
        {
            language: "fr",
            emoji: "🇫🇷"
        },
        {
            language: "es",
            emoji: "🇪🇸"
        },
        {
            language: "de",
            emoji: "🇩🇪"
        },
        {
            language: "en",
            emoji: "🇬🇧"
        }
    ],
});

