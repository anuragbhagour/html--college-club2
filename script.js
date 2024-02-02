document.addEventListener('DOMContentLoaded', function () {
    // Sample FAQ data (replace with your actual data)
    const faqs = [
        { question: 'What is Lorem Ipsum?', answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { question: 'Why do we use it?', answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
        // Add more FAQs as needed
    ];

    const searchInput = document.getElementById('searchInput');
    const faqList = document.getElementById('faqList');

    // Display all FAQs initially
    displayFAQs(faqs);

    // Event listener for search input
    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredFAQs = faqs.filter(faq => faq.question.toLowerCase().includes(searchTerm));
        displayFAQs(filteredFAQs);
    });

    // Function to display FAQs
    function displayFAQs(faqsToDisplay) {
        faqList.innerHTML = ''; // Clear existing content

        faqsToDisplay.forEach(faq => {
            const faqItem = document.createElement('div');
            faqItem.classList.add('faqItem');

            const questionElement = document.createElement('h2');
            questionElement.textContent = faq.question;

            const answerElement = document.createElement('p');
            answerElement.textContent = faq.answer;

            faqItem.appendChild(questionElement);
            faqItem.appendChild(answerElement);
            faqList.appendChild(faqItem);
        });
    }
});
