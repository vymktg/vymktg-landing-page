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

  window.hsConversationsOnReady = [
    () => {
      window.HubSpotConversations.widget.load({});
    },
  ];

  function onConversationsAPIReady() {
    console.log(`HubSpot Conversations API: ${window.HubSpotConversations}`);
  }

  /*
   If external API methods are already available, use them.
  */
  if (window.HubSpotConversations) {
    onConversationsAPIReady();
  } else {
    /*
      Otherwise, callbacks can be added to the hsConversationsOnReady on the window object.
      These callbacks will be called once the external API has been initialized.
    */
    window.hsConversationsOnReady = [onConversationsAPIReady];
  }
};