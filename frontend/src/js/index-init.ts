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
      load: ({}) => void;
    };
  };
}


window.onload = () => {
  window.hsConversationsSettings = {
    loadImmediately: false,
    inlineEmbedSelector: "#hubspot-conversations-inline-parent",
    enableWidgetCookieBanner: true,
    disableAttachment: true,
  };


  function onConversationsAPIReady() {
    console.log(`HubSpot Conversations API: ${window.HubSpotConversations}`);
    console.log('window.HubSpotConversations', window.HubSpotConversations);

    window.HubSpotConversations.widget.load({});
  }

  /*
   If external API methods are already available, use them.
  */
  if (window.HubSpotConversations) {
    onConversationsAPIReady();
  } else {
    window.hsConversationsOnReady = [
      () => {
        window.HubSpotConversations.widget.load({});
      },
    ];
  }
};