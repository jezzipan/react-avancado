import GlobalStyles from './../src/components/styles/global'


export const decorators = [
    (Story) => (
        <>
            <GlobalStyles />
            <Story />
        </>
    )
]