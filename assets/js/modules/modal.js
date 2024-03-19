import fancybox from "@fancyapps/fancybox";

export default function () {
  $.fancybox.defaults.btnTpl = {
    smallBtn:
      '<div data-fancybox-close class="fancybox-close"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"xmlns="http://www.w3.org/2000/svg" > <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4142 12L17.7072 7.70701C18.0982 7.31601 18.0982 6.68401 17.7072 6.29301C17.3162 5.90201 16.6842 5.90201 16.2933 6.29301L12.0002 10.586L7.70725 6.29301C7.31625 5.90201 6.68425 5.90201 6.29325 6.29301C5.90225 6.68401 5.90225 7.31601 6.29325 7.70701L10.5862 12L6.29325 16.293C5.90225 16.684 5.90225 17.316 6.29325 17.707C6.48825 17.902 6.74425 18 7.00025 18C7.25625 18 7.51225 17.902 7.70725 17.707L12.0002 13.414L16.2933 17.707C16.4882 17.902 16.7443 18 17.0002 18C17.2562 18 17.5122 17.902 17.7072 17.707C18.0982 17.316 18.0982 16.684 17.7072 16.293L13.4142 12Z" fill="currentColor"/> </svg></div>',
  };

  $.fancybox.defaults.hash = false;
  $.fancybox.defaults.infobar = false;
  $.fancybox.defaults.toolbar = false;
  $.fancybox.defaults.smallBtn = true;
  $.fancybox.defaults.closeExisting = true;
  $.fancybox.defaults.touch = false;
  $.fancybox.defaults.hideScrollbar = true;
  $.fancybox.defaults.fullScreen = false;
  $.fancybox.defaults.backFocus = false;
  $.fancybox.defaults.keyboard = false;
  $.fancybox.defaults.arrows = false;
  $.fancybox.defaults.loop = false;

  $('[data-modal-type="modal"]').fancybox({
    baseClass: "modal",
  });
}
