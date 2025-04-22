import {
    Card,
    Layout,
    Page
} from '@shopify/polaris'

export const About = () => {
    return (
        <Page 
            title='About Page'
            backAction={{
                content: "Back",
                url: '/about/klsdjfk'
            }}
        >
            <Layout >
                <Layout.Section variant='oneThird'>
                    <Card>
                        dfdfd
                    </Card>
                </Layout.Section>
                <Layout.Section>
                    <Card>
                        dfd
                    </Card>
                </Layout.Section>
            </Layout>
        </Page>
    )
}