
const initialFAQ = () => {
    const faqList = document.querySelectorAll<HTMLElement>("#faq .faq-item");

    faqList.forEach((item: HTMLElement) => {
        item.addEventListener("click", () => {
            onClickAccordion(item, faqList);
        });
    });
}

const onClickAccordion = (item: HTMLElement, faqList: NodeListOf<HTMLElement>) => {
    if (!item.hasAttribute("open")) {
        openAccordion(item);
        closeAnotherAccordion(item, faqList);
    } else {
        closeAccordion(item);
    }
};

const closeAnotherAccordion = (item: HTMLElement, faqList: NodeListOf<HTMLElement>) => {
    faqList.forEach((element) => {
        if (element.id !== item.id) {
            closeAccordion(element);
        }
    });
}

const openAccordion = (element: HTMLElement) => {
    const answerElement = element.getElementsByClassName(
        "answer"
    )[0] as HTMLElement;

    element.setAttribute("open", "true");
    answerElement.style.maxHeight = `${answerElement.scrollHeight + 80}px`;
};

const closeAccordion = (element: HTMLElement) => {
    const answerEl = element.getElementsByClassName("answer")[0] as HTMLElement;
    element.removeAttribute("open");
    answerEl.style.maxHeight = `0px`;
};

initialFAQ();