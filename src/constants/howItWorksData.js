export const STEP_ONE = {
  step: "01",
  title: "Select a service and upload your images.",
  description:
    "When you start a new order, we'll use your service selections and images to give you an accurate price for your order — without having to wait for a quote.",
  note: "Everything is secure and encrypted. You can upload any of these file types:",
  checklist: ["Bulk Upload", "Secure & Safe", "All file formats supports"],
  fileTypes: ["JPG (Preferred)", "PNG", "PSD", "DNG", "PDF", "RAW"],
  thumbnails: [
    "/assets/images/how-it-works/upload-thumb-1.png",
    "/assets/images/how-it-works/upload-thumb-2.png",
    "/assets/images/how-it-works/upload-thumb-3.png",
    "/assets/images/how-it-works/upload-thumb-4.png",
    "/assets/images/how-it-works/upload-thumb-5.png",
  ],
  uploadCount: "254 images",
  uploadSize: "254MB",
  uploadProgress: 57,
};

export const HOW_IT_WORKS_STEPS = [
  {
    id: "timeline",
    step: "02",
    title: "Choose your turnaround time.",
    description:
      "We do our best to work within your timeline, but if you need it super quickly, we may charge a rush fee — we'll always let you know before you place your order.",
    image: "/assets/images/how-it-works/step-2-timeline.png",
    imagePosition: "right",
  },
  {
    id: "details",
    step: "03",
    title: "Share any details and finish up your order.",
    description:
      "Need something specific edited a certain way? Let us know here, and rest assured your images are in good hands and will be worked on by real editors.",
    image: "/assets/images/how-it-works/step-3-details.png",
    imagePosition: "left",
  },
  {
    id: "edit",
    step: "04",
    title: "We edit your images, while you get back to the fun stuff.",
    description:
      "Once your order is placed, our expert retouchers handle the editing while you focus on running your business.",
    image: "/assets/images/how-it-works/step-4-edit.png",
    imagePosition: "right",
  },
  {
    id: "delivery",
    step: "05",
    title: "Download your professionally edited images.",
    description:
      "Review, download, and use your polished, marketplace-ready images right away.",
    image: "/assets/images/how-it-works/step-5-delivery.png",
    imagePosition: "left",
  },
];
