import "./aos";
import "./faq";
import "./how-it-works";

declare global {
  interface Window {
    hsConversationsSettings: Object;
    hsConversationsOnReady: Object;
  }
  var HubSpotConversations: {
    widget: {
      remove: () => void;
      load: () => void;
    };
  };
}

const onConversationsAPIReady = () => {
  console.log(`HubSpot Conversations API: ${window.HubSpotConversations}`);
}
/*
  configure window.hsConversationsSettings if needed.
*/
window.hsConversationsSettings = {
  loadImmediately: false,
  inlineEmbedSelector: "#hubspot-conversations-inline-parent",
  enableWidgetCookieBanner: true,
  disableAttachment: true,
};
/*
 If external API methods are already available, use them.
*/
if (window.HubSpotConversations) {
  console.log('The api is ready already');
} else {
  window.hsConversationsOnReady = [onConversationsAPIReady];
}