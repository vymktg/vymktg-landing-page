import "./aos";
import "./faq";
import "./how-it-works";

declare global {
  interface Window {
    hsConversationsSettings: Object;
  }
  var HubSpotConversations: {
    widget: {
      remove: () => void;
      load: () => void;
    };
  };
}

const loadHubSpot = async () => { 
  window.hsConversationsSettings = {
    loadImmediately: false,
    inlineEmbedSelector: "#hubspot-conversations-inline-parent",
    enableWidgetCookieBanner: true,
    disableAttachment: true,
  };

  await window.HubSpotConversations.widget.load();

  function onConversationsAPIReady() {
    console.log(`HubSpot Conversations API: ${window.HubSpotConversations}`);
  }

  /*
   If external API methods are already available, use them.
  */
  if (window.HubSpotConversations) {
    onConversationsAPIReady();
  }

}
document.addEventListener("DOMContentLoaded", (event) => {
  loadHubSpot();
});