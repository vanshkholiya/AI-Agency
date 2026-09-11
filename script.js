async function sendChatMessage() {
    const input = document.getElementById("user-message");
    const chatBox = document.getElementById("chat-box");

    const message = input.value.trim();

    if (message === "") {
        return;
    }

    // User message
    const userMessage = document.createElement("p");
    userMessage.textContent = "You: " + message;
    chatBox.appendChild(userMessage);

    input.value = "";

    // Temporary loading message
    const aiMessage = document.createElement("p");
    aiMessage.textContent = "AI: Thinking... 🤖";
    chatBox.appendChild(aiMessage);

    try {
        const response = await fetch("/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: message
            })
        });

        const data = await response.json();

        aiMessage.textContent = "AI: " + data.reply;

    } catch (error) {
        console.error(error);
        aiMessage.textContent = "AI: Server se connection nahi ho pa raha.";
    }

    chatBox.scrollTop = chatBox.scrollHeight;
}

function showProduct(productName) {

    const products = {
        "AI Chatbot":
            "An intelligent chatbot that can answer questions, support customers and automate conversations.",

        "AI Content Generator":
            "Create useful content faster with AI for blogs, marketing, social media and business needs.",

        "AI Document Assistant":
            "Upload and work with documents using AI to quickly understand, summarize and find information.",

        "AI Study Assistant":
            "An AI-powered learning assistant that helps students understand topics, revise and practice.",

        "AI Business Assistant":
            "An AI assistant designed to help businesses with tasks, information, productivity and automation."
    };

    document.getElementById("product-title").textContent = productName;

    document.getElementById("product-description").textContent =
        products[productName] || "Powerful AI solution designed to solve real-world problems.";

    document.getElementById("product-modal").style.display = "flex";
}

function closeProduct() {
    document.getElementById("product-modal").style.display = "none";
}

function showService(serviceName) {

    const services = {
        "AI Chatbot Development":
            "We build intelligent chatbots for customer support, lead generation and business communication.",

        "Business Automation":
            "We automate repetitive business tasks using AI to save time and improve productivity.",

        "AI Integration":
            "We integrate AI into existing websites, apps and business systems.",

        "Custom AI Solutions":
            "We create custom AI solutions designed around your specific business requirements.",

        "AI Website & App Development":
            "We build modern AI-powered websites and applications with smart features and automation."
    };

    document.getElementById("product-title").textContent = serviceName;

    document.getElementById("product-description").textContent =
        services[serviceName] || "Custom AI service designed for your business.";

    document.getElementById("product-modal").style.display = "flex";
}

function showPortfolio(projectName) {
    const projects = {
        "AI Customer Support":
            "An AI-powered customer support solution that helps businesses answer customer questions quickly and automate common support tasks.",

        "AI Content Assistant":
            "An AI content solution that helps businesses create, organize and improve content for marketing and communication.",

        "AI Business Automation":
            "An AI automation solution designed to reduce repetitive work and improve business productivity."
    };

    document.getElementById("product-title").textContent = projectName;

    document.getElementById("product-description").textContent =
        projects[projectName] || "AI solution designed for modern businesses.";

    document.getElementById("product-modal").style.display = "flex";
}
