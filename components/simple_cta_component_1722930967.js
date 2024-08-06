/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1722930967", {
    template: `
    <section id="cta-component" class="bg-gradient-to-br from-purple-900 to-black flex-1 py-16">
        <div id="cta-inner-container" class="max-w-screen-xl px-6 mx-auto">
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center bg-opacity-20 bg-white rounded-lg backdrop-filter backdrop-blur-lg shadow-lg p-8">
                <div id="cta-title-container" class="flex mb-6">
                    <h2 id="cta-title" class="flex-1 text-3xl font-extrabold leading-tight tracking-tight text-pink-400">Discover the Latest in Blockchain</h2>
                </div>

                <div id="cta-subtitle-container" class="flex mb-8">
                    <p id="cta-subtitle" class="flex-1 font-light text-blue-300 md:text-lg">Stay ahead of the curve with real-time updates on emerging blockchain trends, projects, and technologies.</p>
                </div>
                
                <div id="cta-button-container" class="flex">
                    <a id="cta-button" href="#" class="flex-1 text-white bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 focus:ring-4 focus:ring-pink-300 font-medium rounded-full text-lg px-8 py-3 transition duration-300 ease-in-out transform hover:scale-105">Explore Blockchain Now</a>
                </div>
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
