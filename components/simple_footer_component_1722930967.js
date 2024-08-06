/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1722930967", {
    template: `
    <footer id="footer-section" class="flex-1 bg-gradient-to-r from-purple-900 to-black text-white">
            <div id="footer-container" class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
                <hr id="footer-divider" class="my-6 border-pink-500 sm:mx-auto lg:my-8">
                <div id="footer-content" class="text-center">
                    <div class="flex">
                        <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-5 text-2xl font-semibold text-pink-400 hover:text-blue-400 transition duration-300">
                            <img id="footer-logo" src="./images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
                            BlockScan: Blockchain Discovery Hub
                        </a>
                    </div>
                </div>
                <div class="flex">
                    <div id="footer-text" class="flex-1 block text-sm text-center text-blue-300">
                        © 2023 BlockScan. Empowering users with the latest blockchain insights and discoveries.
                    </div>
                </div>
            </div>
        </footer> 
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
