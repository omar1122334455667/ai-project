/* ============================================================
   AI for Kids - Interactive JavaScript
   ============================================================ */

// ============================================================
// Lesson Content (No Python - Visual/Conceptual Learning)
// ============================================================
const lessons = {
    // ---- BEGINNER ----
    b1: {
        title: "🤖 What is AI?",
        pages: [
            { content: `
                <h3>Welcome, Young Explorer! 🌟</h3>
                <p><strong>AI</strong> stands for <strong>Artificial Intelligence</strong>. It's a way for computers to think and learn, kind of like how you learn!</p>
                <div class="fun-fact">💡 <strong>Fun Fact:</strong> The word "Artificial" means "made by humans" — so AI is intelligence created by people!</div>
                <p>Think of AI like a really smart helper that lives inside your computer or phone. It can:</p>
                <ul>
                    <li>🗣️ Understand what you say (like Siri or Alexa)</li>
                    <li>👀 Recognize pictures (like finding cats on the internet)</li>
                    <li>🎵 Recommend songs you might like</li>
                    <li>🎮 Play games and get better over time</li>
                </ul>
            `},
            { content: `
                <h3>How is AI Different from Regular Programs? 🤔</h3>
                <p>A regular computer program follows exact rules. But AI can <strong>learn from examples</strong> instead!</p>
                <p>Imagine teaching a friend to recognize a dog:</p>
                <ul>
                    <li>❌ Regular program: "If it has 4 legs AND fur AND a tail → it's a dog"</li>
                    <li>✅ AI: "I've seen 10,000 dogs. They have fur, four legs, a tail, and a wet nose. THIS looks like a dog!"</li>
                </ul>
                <div class="fun-fact">💡 <strong>Fun Fact:</strong> AI gets smarter the more examples it sees — just like you get better at things with practice!</div>
            `},
            { content: `
                <h3>Quiz Time! 🧠</h3>
                <p>Let's check what you learned!</p>
                <div class="quiz-area">
                    <h4>What does AI stand for?</h4>
                    <button class="quiz-option" onclick="checkAnswer(this, true)">Artificial Intelligence</button>
                    <button class="quiz-option" onclick="checkAnswer(this, false)">Automatic Input</button>
                    <button class="quiz-option" onclick="checkAnswer(this, false)">Advanced Internet</button>
                </div>
                <div class="quiz-area">
                    <h4>How does AI learn?</h4>
                    <button class="quiz-option" onclick="checkAnswer(this, false)">From a rule book</button>
                    <button class="quiz-option" onclick="checkAnswer(this, true)">From lots of examples</button>
                    <button class="quiz-option" onclick="checkAnswer(this, false)">It doesn't learn</button>
                </div>
            `}
        ]
    },
    b2: {
        title: "🧠 How AI Thinks",
        pages: [
            { content: `
                <h3>The AI Brain 🧠</h3>
                <p>AI doesn't have a real brain — but it has something called a <strong>model</strong>. A model is like a set of instructions the AI follows after learning from lots of examples.</p>
                <p>Think of it like a recipe! When you bake cookies many times, you figure out the best way. AI does the same with data!</p>
                <div class="fun-fact">💡 <strong>Fun Fact:</strong> A model is like a recipe — instead of ingredients, it uses data!</div>
            `},
            { content: `
                <h3>Input → Thinking → Output 🔄</h3>
                <p>AI works in three steps:</p>
                <ul>
                    <li><strong>Input:</strong> You give the AI information (a picture, a question, sounds)</li>
                    <li><strong>Thinking:</strong> The AI looks at patterns it learned before</li>
                    <li><strong>Output:</strong> The AI gives you an answer!</li>
                </ul>
                <p>Example: You show AI a photo → It looks at shapes and colors → It says "That's a cat!" 🐱</p>
            `},
            { content: `
                <h3>Quiz Time! 🧠</h3>
                <div class="quiz-area">
                    <h4>What is an AI "model"?</h4>
                    <button class="quiz-option" onclick="checkAnswer(this, false)">A toy robot</button>
                    <button class="quiz-option" onclick="checkAnswer(this, true)">A set of learned patterns</button>
                    <button class="quiz-option" onclick="checkAnswer(this, false)">A computer game</button>
                </div>
            `}
        ]
    },
    b3: {
        title: "👀 AI Sees Things",
        pages: [
            { content: `
                <h3>Computer Vision 👁️</h3>
                <p>Have you ever wondered how your phone can find all your cat photos? That's <strong>Computer Vision</strong> — AI that can see and understand images!</p>
                <p>AI learns to see by studying millions of pictures. It looks for patterns like:</p>
                <ul>
                    <li>🐾 Shapes (pointy ears = cat!)</li>
                    <li>🎨 Colors (orange fur = tabby cat!)</li>
                    <li>📐 Lines and edges (round face = cute!)</li>
                </ul>
            `},
            { content: `
                <h3>How AI Recognizes Things 🔍</h3>
                <p>When AI looks at a photo, it breaks it down into tiny pieces:</p>
                <ul>
                    <li>First it sees <strong>edges</strong> (lines where colors change)</li>
                    <li>Then <strong>shapes</strong> (circles, triangles, curves)</li>
                    <li>Then <strong>features</strong> (eyes, nose, ears)</li>
                    <li>Finally, it makes a <strong>guess</strong> — "This is a dog!" 🐕</li>
                </ul>
                <div class="fun-fact">💡 <strong>Fun Fact:</strong> AI can now recognize faces, read text in photos, and even tell if a plant is sick!</div>
            `},
            { content: `
                <h3>Quiz Time! 👀</h3>
                <div class="quiz-area">
                    <h4>What is "Computer Vision"?</h4>
                    <button class="quiz-option" onclick="checkAnswer(this, false)">A video game</button>
                    <button class="quiz-option" onclick="checkAnswer(this, true)">AI that can see and understand images</button>
                    <button class="quiz-option" onclick="checkAnswer(this, false)">A type of glasses</button>
                </div>
            `}
        ]
    },
    b4: {
        title: "🗣️ AI Listens & Talks",
        pages: [
            { content: `
                <h3>Speech Recognition 🎤</h3>
                <p>When you talk to Siri, Alexa, or Google Assistant, AI is listening! This is called <strong>Speech Recognition</strong>.</p>
                <p>The AI breaks your voice into tiny sound pieces and matches them to words it knows. It's like a giant jigsaw puzzle of sounds!</p>
                <div class="fun-fact">💡 <strong>Fun Fact:</strong> Modern AI can understand over 100 languages!</div>
            `},
            { content: `
                <h3>AI Talks Back! 🔊</h3>
                <p>AI can also <strong>talk</strong>! It uses <strong>Text-to-Speech</strong> to turn words into voice. That's how:</p>
                <ul>
                    <li>导航 gives you directions in your car</li>
                    <li>导航 reads books out loud for you</li>
                    <li>导航 helps people who can't see read text</li>
                </ul>
                <div class="fun-fact">💡 <strong>Fun Fact:</strong> AI voice assistants use deep learning to sound more natural and human-like!</div>
            `},
            { content: `
                <h3>Quiz Time! 🗣️</h3>
                <div class="quiz-area">
                    <h4>What does "Speech Recognition" mean?</h4>
                    <button class="quiz-option" onclick="checkAnswer(this, true)">AI understanding what you say</button>
                    <button class="quiz-option" onclick="checkAnswer(this, false)">AI singing songs</button>
                    <button class="quiz-option" onclick="checkAnswer(this, false)">AI reading books</button>
                </div>
            `}
        ]
    },
    b5: {
        title: "🎮 AI Plays Games",
        pages: [
            { content: `
                <h3>AI Game Champions! 🏆</h3>
                <p>Did you know AI can beat humans at video games, chess, and even Go (a really hard board game)?</p>
                <p>AI learns to play by playing millions of games against itself. It remembers what moves lead to winning!</p>
                <div class="fun-fact">💡 <strong>Fun Fact:</strong> DeepMind's AlphaGo beat the world champion at Go — a game with more possible moves than atoms in the universe!</div>
            `},
            { content: `
                <h3>Learning by Trying 🎯</h3>
                <p>AI learns games the same way you do — by <strong>trial and error</strong>:</p>
                <ul>
                    <li>🎲 Try something random</li>
                    <li>✅ See if it works (win!) → Do it more</li>
                    <li>❌ See if it fails (lose!) → Do it less</li>
                    <li>🔄 Repeat millions of times!</li>
                </ul>
                <p>After playing millions of games, AI finds the best strategies!</p>
            `},
            { content: `
                <h3>Quiz Time! 🎮</h3>
                <div class="quiz-area">
                    <h4>How does AI learn to play games?</h4>
                    <button class="quiz-option" onclick="checkAnswer(this, false)">It reads the rule book once</button>
                    <button class="quiz-option" onclick="checkAnswer(this, true)">By playing millions of games and learning</button>
                    <button class="quiz-option" onclick="checkAnswer(this, false)">Humans program every move</button>
                </div>
            `}
        ]
    },
    b6: {
        title: "🌍 AI Helps the World",
        pages: [
            { content: `
                <h3>AI for Good! 💚</h3>
                <p>AI isn't just for games — it helps people every day!</p>
                <ul>
                    <li>🏥 <strong>Doctors:</strong> AI looks at X-rays to find sickness early</li>
                    <li>🌾 <strong>Farmers:</strong> AI checks if crops need water or have bugs</li>
                    <li>🐕 <strong>Animals:</strong> AI helps find lost pets and protects wildlife</li>
                    <li>🌍 <strong>Environment:</strong> AI tracks climate change and helps stop pollution</li>
                </ul>
            `},
            { content: `
                <h3>AI in Your Life 🏠</h3>
                <p>You probably use AI every day without knowing it!</p>
                <ul>
                    <li>📱 Your phone's face unlock</li>
                    <li>🎬 Netflix recommending shows</li>
                    <li>🗺️ Maps finding the best route</li>
                    <li>🎵 Spotify making your playlist</li>
                    <li>📸 Phone camera making photos look great</li>
                </ul>
                <div class="fun-fact">💡 <strong>Fun Fact:</strong> AI helps scientists discover new planets by looking at telescope data!</div>
            `},
            { content: `
                <h3>Quiz Time! 🌍</h3>
                <div class="quiz-area">
                    <h4>How does AI help doctors?</h4>
                    <button class="quiz-option" onclick="checkAnswer(this, false)">AI replaces all doctors</button>
                    <button class="quiz-option" onclick="checkAnswer(this, true)">AI helps find sickness in X-rays early</button>
                    <button class="quiz-option" onclick="checkAnswer(this, false)">AI doesn't help doctors</button>
                </div>
            `}
        ]
    },

    // ---- MEDIUM ----
    m1: {
        title: "📊 Training Data",
        pages: [
            { content: `
                <h3>What is Training Data? 📚</h3>
                <p>To learn, AI needs lots of examples — this is called <strong>training data</strong>. It's like a textbook for AI!</p>
                <p>If you want AI to recognize cats, you need to show it thousands of cat photos. The more examples, the smarter AI gets!</p>
                <div class="fun-fact">💡 <strong>Fun Fact:</strong> ChatGPT was trained on billions of pages of text from the internet!</div>
            `},
            { content: `
                <h3>Good Data vs Bad Data ⚖️</h3>
                <p>The quality of training data matters a LOT:</p>
                <ul>
                    <li>✅ <strong>Good data:</strong> Many different cats, different angles, different colors</li>
                    <li>❌ <strong>Bad data:</strong> Only orange cats — AI won't recognize black cats!</li>
                    <li>✅ <strong>Balanced data:</strong> Equal examples of cats and dogs</li>
                    <li>❌ <strong>Biased data:</strong> Only photos from one country</li>
                </ul>
                <div class="fun-fact">💡 <strong>Fun Fact:</strong> If you train AI only with pictures of sunny weather, it might not recognize a rainy day!</div>
            `},
            { content: `
                <h3>Quiz Time! 📊</h3>
                <div class="quiz-area">
                    <h4>Why does AI need lots of training data?</h4>
                    <button class="quiz-option" onclick="checkAnswer(this, false)">To fill up computer memory</button>
                    <button class="quiz-option" onclick="checkAnswer(this, true)">To learn patterns and make good guesses</button>
                    <button class="quiz-option" onclick="checkAnswer(this, false)">AI doesn't need training data</button>
                </div>
            `}
        ]
    },
    m2: {
        title: "🎨 AI Creates Art",
        pages: [
            { content: `
                <h3>AI Art Machines 🎨</h3>
                <p>AI can now create amazing art, music, and even write stories! How does it work?</p>
                <p>AI art tools like DALL-E and Midjourney learn by studying millions of images and their descriptions. Then you can ask them to create new images!</p>
                <div class="fun-fact">💡 <strong>Fun Fact:</strong> You can type "a cat astronaut on Mars" and AI will create that exact picture!</div>
            `},
            { content: `
                <h3>How AI Makes Art 🖌️</h3>
                <ul>
                    <li>📝 <strong>You describe</strong> what you want ("a blue dragon in a garden")</li>
                    <li>🔍 <strong>AI remembers</strong> patterns from millions of images</li>
                    <li>🎨 <strong>AI creates</strong> a new image that matches your description</li>
                    <li>✨ <strong>You react</strong> — "wow, that's amazing!"</li>
                </ul>
                <p>AI can also compose music 🎵, write poems 📝, and even design buildings 🏛️!</p>
            `},
            { content: `
                <h3>Quiz Time! 🎨</h3>
                <div class="quiz-area">
                    <h4>How does AI create art?</h4>
                    <button class="quiz-option" onclick="checkAnswer(this, false)">It uses a real paintbrush</button>
                    <button class="quiz-option" onclick="checkAnswer(this, true)">It learns patterns and creates new images</button>
                    <button class="quiz-option" onclick="checkAnswer(this, false)">It copies existing art exactly</button>
                </div>
            `}
        ]
    },
    m3: {
        title: "🔍 Patterns & Rules",
        pages: [
            { content: `
                <h3>Finding Patterns 🔍</h3>
                <p>AI is really good at finding <strong>patterns</strong> — things that repeat or follow a rule.</p>
                <p>Patterns are everywhere! Look at this sequence: 🔴🔵🔴🔵🔴🔵 — what comes next? 🔴! You found a pattern!</p>
                <div class="fun-fact">💡 <strong>Fun Fact:</strong> AI finds patterns in data that humans can't even see!</div>
            `},
            { content: `
                <h3>Making Predictions 🔮</h3>
                <p>Once AI finds patterns, it can make <strong>predictions</strong> — guessing what happens next!</p>
                <ul>
                    <li>🌤️ Weather: "Based on patterns, it will rain tomorrow"</li>
                    <li>🛒 Shopping: "People who bought this also liked..."</li>
                    <li>📱 Text: "The next word you want to type is..."</li>
                </ul>
                <p>Predictions aren't always perfect, but AI gets better with more data!</p>
            `},
            { content: `
                <h3>Quiz Time! 🔍</h3>
                <div class="quiz-area">
                    <h4>What do AI predictions rely on?</h4>
                    <button class="quiz-option" onclick="checkAnswer(this, false)">Magic crystal balls</button>
                    <button class="quiz-option" onclick="checkAnswer(this, true)">Patterns found in data</button>
                    <button class="quiz-option" onclick="checkAnswer(this, false)">Random guessing</button>
                </div>
            `}
        ]
    },
    m4: {
        title: "🤖 Chatbots & Helpers",
        pages: [
            { content: `
                <h3>Meet Chatbots! 💬</h3>
                <p>You've probably chatted with a bot online — that's AI! Chatbots can answer questions, help with problems, and even tell jokes.</p>
                <p>Modern chatbots like ChatGPT understand your questions and give helpful answers by predicting the best response word by word.</p>
                <div class="fun-fact">💡 <strong>Fun Fact:</strong> Each word a chatbot writes is chosen by looking at what words usually come next!</div>
            `},
            { content: `
                <h3>How Chatbots Work 🔄</h3>
                <ul>
                    <li>💬 <strong>You ask:</strong> "What's the weather?"</li>
                    <li>🧠 <strong>AI thinks:</strong> Patterns say → weather questions need location and forecast</li>
                    <li>🗣️ <strong>AI answers:</strong> "It's sunny today in New York!"</li>
                </ul>
                <p>Chatbots learn from millions of conversations to get better at talking!</p>
            `},
            { content: `
                <h3>Quiz Time! 🤖</h3>
                <div class="quiz-area">
                    <h4>How do chatbots choose their words?</h4>
                    <button class="quiz-option" onclick="checkAnswer(this, false)">Randomly from a dictionary</button>
                    <button class="quiz-option" onclick="checkAnswer(this, true)">By predicting the best next word</button>
                    <button class="quiz-option" onclick="checkAnswer(this, false)">Humans type every answer</button>
                </div>
            `}
        ]
    },
    m5: {
        title: "🚗 Self-Driving Cars",
        pages: [
            { content: `
                <h3>Cars That Drive Themselves! 🚗</h3>
                <p>Self-driving cars use AI to see the road, understand traffic, and make driving decisions — all without a human driver!</p>
                <p>They use cameras, sensors, and AI to work together:</p>
                <ul>
                    <li>📷 <strong>Cameras:</strong> See traffic lights, signs, people</li>
                    <li>📡 <strong>Sensors:</strong> Detect other cars and objects nearby</li>
                    <li>🗺️ <strong>Maps:</strong> Know where to go</li>
                    <li>🧠 <strong>AI Brain:</strong> Decides when to stop, turn, speed up</li>
                </ul>
            `},
            { content: `
                <h3>AI Driving Decisions 🚦</h3>
                <p>Every second, a self-driving car makes hundreds of decisions:</p>
                <ul>
                    <li>🔴 Red light → Stop!</li>
                    <li>🚶 Person crossing → Slow down</li>
                    <li>🔄 Green light → Go!</li>
                    <li>🚗 Car ahead → Keep safe distance</li>
                </ul>
                <div class="fun-fact">💡 <strong>Fun Fact:</strong> Self-driving cars have driven millions of miles and are statistically safer than human drivers!</div>
            `},
            { content: `
                <h3>Quiz Time! 🚗</h3>
                <div class="quiz-area">
                    <h4>What helps a self-driving car "see" the road?</h4>
                    <button class="quiz-option" onclick="checkAnswer(this, true)">Cameras, sensors, and AI</button>
                    <button class="quiz-option" onclick="checkAnswer(this, false)">A human sitting inside</button>
                    <button class="quiz-option" onclick="checkAnswer(this, false)">A crystal ball</button>
                </div>
            `}
        ]
    },
    m6: {
        title: "🎬 AI Recommends",
        pages: [
            { content: `
                <h3>How Netflix Knows! 🎬</h3>
                <p>Ever wonder how Netflix, YouTube, or Spotify seem to know exactly what you like? That's AI <strong>recommendation systems</strong>!</p>
                <p>They study what you watch, listen to, and click on — then find patterns to suggest new things you'll enjoy.</p>
                <div class="fun-fact">💡 <strong>Fun Fact:</strong> Netflix saves over $1 billion per year because AI keeps people watching instead of cancelling!</div>
            `},
            { content: `
                <h3>How Recommendations Work 🔄</h3>
                <ul>
                    <li>📊 <strong>Track:</strong> What you watch, like, skip, and rewatch</li>
                    <li>👥 <strong>Compare:</strong> Find people with similar taste</li>
                    <li>🎯 <strong>Suggest:</strong> Show you things similar people loved</li>
                    <li>📈 <strong>Learn:</strong> Get better at guessing over time</li>
                </ul>
                <p>This is why you see "Because you watched..." suggestions!</p>
            `},
            { content: `
                <h3>Quiz Time! 🎬</h3>
                <div class="quiz-area">
                    <h4>How does YouTube know what videos to suggest?</h4>
                    <button class="quiz-option" onclick="checkAnswer(this, false)">It guesses randomly</button>
                    <button class="quiz-option" onclick="checkAnswer(this, true)">It learns from what you watch and like</button>
                    <button class="quiz-option" onclick="checkAnswer(this, false)">A person picks them for you</button>
                </div>
            `}
        ]
    },

    // ---- HARD ----
    h1: {
        title: "🏗️ Neural Networks",
        pages: [
            { content: `
                <h3>Artificial Brains! 🧠</h3>
                <p>A <strong>Neural Network</strong> is how AI模仿 the human brain. It's made of layers of "neurons" — tiny decision-makers that pass information to each other!</p>
                <p>Each neuron takes in information, does a tiny calculation, and passes the result to the next layer. By working together, millions of neurons can recognize faces, understand language, and more!</p>
                <div class="fun-fact">💡 <strong>Fun Fact:</strong> Your brain has about 86 billion neurons. A large AI neural network has about 1 trillion — but each AI neuron is much simpler!</div>
            `},
            { content: `
                <h3>How Neural Networks Learn 📈</h3>
                <ul>
                    <li>1️⃣ <strong>Forward pass:</strong> Data goes through the network → AI makes a guess</li>
                    <li>2️⃣ <strong>Check:</strong> Compare the guess to the right answer</li>
                    <li>3️⃣ <strong>Error:</strong> Calculate how wrong the guess was</li>
                    <li>4️⃣ <strong>Adjust:</strong> Tweak the neurons to be less wrong next time</li>
                    <li>5️⃣ <strong>Repeat:</strong> Do this millions of times!</li>
                </ul>
                <div class="fun-fact">💡 <strong>Fun Fact:</strong> This process of adjusting is called "backpropagation" — it's like the AI learning from its mistakes!</div>
            `},
            { content: `
                <h3>Types of Neural Networks 🗂️</h3>
                <ul>
                    <li>🖼️ <strong>CNN (Convolutional):</strong> Best for images and photos</li>
                    <li>📝 <strong>RNN / Transformer:</strong> Best for text and language</li>
                    <li>🎮 <strong>Reinforcement Learning:</strong> Best for games and decisions</li>
                    <li>🎨 <strong>GAN:</strong> Creates new images, art, and deepfakes</li>
                </ul>
                <p>Each type is designed for different tasks — just like you use different tools for different homework!</p>
            `},
            { content: `
                <h3>Quiz Time! 🏗️</h3>
                <div class="quiz-area">
                    <h4>What is "backpropagation"?</h4>
                    <button class="quiz-option" onclick="checkAnswer(this, false)">A type of computer virus</button>
                    <button class="quiz-option" onclick="checkAnswer(this, true)">The process of adjusting neurons after finding errors</button>
                    <button class="quiz-option" onclick="checkAnswer(this, false)">How data enters the network</button>
                </div>
            `}
        ]
    },
    h2: {
        title: "🧬 Deep Learning",
        pages: [
            { content: `
                <h3>What is Deep Learning? 🧬</h3>
                <p><strong>Deep Learning</strong> is neural networks with LOTS of layers — hundreds or even thousands! Each layer learns something more complex:</p>
                <ul>
                    <li>Layer 1: Sees edges and lines</li>
                    <li>Layer 2: Sees shapes (circles, squares)</li>
                    <li>Layer 3: Sees parts (eyes, ears, wheels)</li>
                    <li>Layer 4: Sees objects (cats, cars)</li>
                    <li>Layer 5: Understands scenes (cat on a couch)</li>
                </ul>
                <div class="fun-fact">💡 <strong>Fun Fact:</strong> "Deep" in Deep Learning refers to the many layers — not that it's hard to understand!</div>
            `},
            { content: `
                <h3>Why Deep Learning is Powerful 💪</h3>
                <p>Traditional programming: Humans write the rules.</p>
                <p>Deep learning: AI discovers the rules by itself!</p>
                <ul>
                    <li>🏆 Beats humans at Go, Chess, and poker</li>
                    <li>🎨 Creates photorealistic images from text</li>
                    <li>🗣️ Translates languages in real-time</li>
                    <li>🧬 Helps discover new drugs and proteins</li>
                </ul>
                <div class="fun-fact">💡 <strong>Fun Fact:</strong> DeepMind's AlphaFold solved a 50-year-old biology problem using deep learning!</div>
            `},
            { content: `
                <h3>Quiz Time! 🧬</h3>
                <div class="quiz-area">
                    <h4>What makes deep learning "deep"?</h4>
                    <button class="quiz-option" onclick="checkAnswer(this, false)">It's hard to understand</button>
                    <button class="quiz-option" onclick="checkAnswer(this, true)">It uses many layers of neurons</button>
                    <button class="quiz-option" onclick="checkAnswer(this, false)">It processes deep water images</button>
                </div>
            `}
        ]
    },
    h3: {
        title: "⚖️ AI Bias & Fairness",
        pages: [
            { content: `
                <h3>What is AI Bias? ⚖️</h3>
                <p>AI bias happens when AI makes unfair decisions because of bad training data. If data has unfair patterns, AI will learn those unfair patterns!</p>
                <p>Example: If an AI is trained mostly on photos of men for "CEO" and women for "nurse," it might think CEOs are always men — which is wrong!</p>
                <div class="fun-fact">💡 <strong>Fun Fact:</strong> In 2018, Amazon had to scrap an AI hiring tool because it was biased against women!</div>
            `},
            { content: `
                <h3>Why Fairness Matters 🤝</h3>
                <ul>
                    <li>🏥 <strong>Healthcare:</strong> AI should help all patients equally</li>
                    <li>🏦 <strong>Banking:</strong> AI should give loans fairly to everyone</li>
                    <li>👮 <strong>Law:</strong> AI should not treat people differently based on race</li>
                    <li>📱 <strong>Tech:</strong> Face recognition should work for all skin tones</li>
                </ul>
                <p>Building fair AI is one of the biggest challenges in the field!</p>
            `},
            { content: `
                <h3>How to Fix Bias 🔧</h3>
                <ul>
                    <li>📊 Use diverse, representative training data</li>
                    <li>👥 Have diverse teams building AI</li>
                    <li>🔍 Test AI for fairness before releasing it</li>
                    <li>📋 Create rules and guidelines for fair AI</li>
                </ul>
                <div class="fun-fact">💡 <strong>Fun Fact:</strong> Many companies now have "AI Ethics Teams" whose only job is to make sure AI is fair!</div>
            `},
            { content: `
                <h3>Quiz Time! ⚖️</h3>
                <div class="quiz-area">
                    <h4>What causes AI bias?</h4>
                    <button class="quiz-option" onclick="checkAnswer(this, false)">AI is naturally unfair</button>
                    <button class="quiz-option" onclick="checkAnswer(this, true)">Biased or unrepresentative training data</button>
                    <button class="quiz-option" onclick="checkAnswer(this, false)">Computers are broken</button>
                </div>
            `}
        ]
    },
    h4: {
        title: "🔒 AI & Privacy",
        pages: [
            { content: `
                <h3>Why Privacy Matters 🔒</h3>
                <p>AI needs data to learn — but whose data? Your photos, messages, and searches are all data that AI could use. Keeping this data safe is super important!</p>
                <p>Privacy means you control who sees your information and how it's used.</p>
                <div class="fun-fact">💡 <strong>Fun Fact:</strong> Many countries have laws like GDPR that protect your data from being misused by AI!</div>
            `},
            { content: `
                <h3>Privacy Challenges with AI ⚠️</h3>
                <ul>
                    <li>📸 <strong>Facial recognition:</strong> Cameras can identify you in public</li>
                    <li>📱 <strong>Data collection:</strong> Apps collect info about you</li>
                    <li>🎯 <strong>Targeted ads:</strong> AI knows what you like and shows ads</li>
                    <li>🗣️ <strong>Voice assistants:</strong> Always listening for keywords</li>
                </ul>
                <p>The key is transparency — companies should tell you what data they collect and give you control!</p>
            `},
            { content: `
                <h3>Protecting Yourself 🛡️</h3>
                <ul>
                    <li>✅ Read privacy policies (or ask a parent)</li>
                    <li>✅ Use strong passwords</li>
                    <li>✅ Don't share personal info online</li>
                    <li>✅ Check app permissions</li>
                    <li>✅ Use privacy settings on social media</li>
                </ul>
                <div class="fun-fact">💡 <strong>Fun Fact:</strong> You have the right to ask companies to delete your data!</div>
            `},
            { content: `
                <h3>Quiz Time! 🔒</h3>
                <div class="quiz-area">
                    <h4>Why is AI privacy important?</h4>
                    <button class="quiz-option" onclick="checkAnswer(this, false)">It isn't important</button>
                    <button class="quiz-option" onclick="checkAnswer(this, true)">To protect personal data from misuse</button>
                    <button class="quiz-option" onclick="checkAnswer(this, false)">To make AI slower</button>
                </div>
            `}
        ]
    },
    h5: {
        title: "🧪 AI in Science",
        pages: [
            { content: `
                <h3>AI Discovers New Things! 🔬</h3>
                <p>AI is revolutionizing science by analyzing data faster than any human could!</p>
                <ul>
                    <li>💊 <strong>Medicine:</strong> AI finds new drugs and predicts disease</li>
                    <li>🧬 <strong>Biology:</strong> AI predicts how proteins fold (AlphaFold)</li>
                    <li>🔭 <strong>Astronomy:</strong> AI discovers new planets and galaxies</li>
                    <li>🧪 <strong>Chemistry:</strong> AI invents new materials</li>
                </ul>
                <div class="fun-fact">💡 <strong>Fun Fact:</strong> AI discovered a new antibiotic in just 4 days — a process that normally takes years!</div>
            `},
            { content: `
                <h3>AI in Space! 🚀</h3>
                <p>NASA and SpaceX use AI for:</p>
                <ul>
                    <li>🛰️ Controlling robots on Mars</li>
                    <li>🌌 Finding exoplanets (planets outside our solar system)</li>
                    <li>☄️ Tracking asteroids that could hit Earth</li>
                    <li>📡 Analyzing signals from deep space</li>
                </ul>
                <div class="fun-fact">💡 <strong>Fun Fact:</strong> AI found Kepler-90i, a planet humans missed, by re-analyzing old telescope data!</div>
            `},
            { content: `
                <h3>Quiz Time! 🧪</h3>
                <div class="quiz-area">
                    <h4>How does AI help in medicine?</h4>
                    <button class="quiz-option" onclick="checkAnswer(this, false)">AI replaces all doctors</button>
                    <button class="quiz-option" onclick="checkAnswer(this, true)">AI helps find new drugs and predict diseases</button>
                    <button class="quiz-option" onclick="checkAnswer(this, false)">AI doesn't help in medicine</button>
                </div>
            `}
        ]
    },
    h6: {
        title: "🚀 The Future of AI",
        pages: [
            { content: `
                <h3>What's Coming Next? 🔮</h3>
                <p>AI is evolving fast! Here's what the future might look like:</p>
                <ul>
                    <li>🏥 <strong>Health:</strong> AI doctors that catch diseases before symptoms</li>
                    <li>🎓 <strong>Education:</strong> AI tutors that adapt to how YOU learn</li>
                    <li>🚗 <strong>Transport:</strong> Fully autonomous cars everywhere</li>
                    <li>🌍 <strong>Climate:</strong> AI helping reverse climate change</li>
                </ul>
            `},
            { content: `
                <h3>AI Ethics: Big Questions 🤔</h3>
                <p>As AI gets smarter, we need to answer big questions:</p>
                <ul>
                    <li>Should AI make decisions about people's lives?</li>
                    <li>Who is responsible when AI makes mistakes?</li>
                    <li>How do we make sure AI benefits everyone, not just some?</li>
                    <li>What jobs will AI create (and change)?</li>
                </ul>
                <div class="fun-fact">💡 <strong>Fun Fact:</strong> YOU will be part of the generation that shapes how AI is used — your voice matters!</div>
            `},
            { content: `
                <h3>Your AI Journey Starts Now! 🌟</h3>
                <p>Whether you want to be a programmer, artist, doctor, or anything else — AI will be part of your future!</p>
                <p>By understanding AI now, you're already ahead. Keep learning, stay curious, and remember:</p>
                <div class="fun-fact">🌟 <strong>You are the future of AI!</strong> Start exploring, ask questions, and never stop being curious!</div>
            `},
            { content: `
                <h3>Final Quiz! 🏆</h3>
                <div class="quiz-area">
                    <h4>What's the most important thing about AI?</h4>
                    <button class="quiz-option" onclick="checkAnswer(this, false)">It's really fast</button>
                    <button class="quiz-option" onclick="checkAnswer(this, true)">It should be built and used responsibly</button>
                    <button class="quiz-option" onclick="checkAnswer(this, false)">It will replace all humans</button>
                </div>
            `}
        ]
    }
};

// ============================================================
// Game Definitions
// ============================================================
function getGames() {
    return {
        // EASY GAMES
        e1: {
            title: "🎯 AI or Human?",
            difficulty: "easy",
            instructions: "Look at each image description and decide: was it created by AI or a human?",
            play(container, footer) {
                const questions = [
                    { q: "A painting of a sunset over mountains with perfect colors", answer: "ai", emoji: "🌅" },
                    { q: "A child's drawing of their family with crayons", answer: "human", emoji: "👨‍👩‍👧‍👦" },
                    { q: "A photo-realistic portrait but the person has 6 fingers", answer: "ai", emoji: "🧑" },
                    { q: "A famous Mona Lisa painting by Leonardo da Vinci", answer: "human", emoji: "🎨" },
                    { q: "A perfectly symmetrical landscape with impossible colors", answer: "ai", emoji: "🏔️" },
                    { q: "A hand-painted watercolor with visible brush strokes and imperfections", answer: "human", emoji: "🖌️" },
                    { q: "A cat photo where the tail splits into two", answer: "ai", emoji: "🐱" },
                    { q: "A hand-drawn birthday card with messy handwriting", answer: "human", emoji: "🎂" },
                ];
                let score = 0, current = 0;

                function render() {
                    if (current >= questions.length) {
                        showScore(score, questions.length, "AI Detector");
                        return;
                    }
                    const q = questions[current];
                    container.innerHTML = `
                        <div class="game-score-bar"><span>Score: ${score}/${questions.length}</span><span>Question ${current + 1} of ${questions.length}</span></div>
                        <div class="game-instructions">${q.emoji} <strong>${q.q}</strong></div>
                        <div style="display:flex;gap:12px;margin-top:16px;">
                            <button class="btn btn-warm" style="flex:1" onclick="this.closest('.modal-body').dataset.answer='ai'">🤖 Made by AI</button>
                            <button class="btn btn-outline-warm" style="flex:1" onclick="this.closest('.modal-body').dataset.answer='human'">🧑 Made by Human</button>
                        </div>
                    `;
                    const checkInterval = setInterval(() => {
                        const ans = container.dataset.answer;
                        if (ans) {
                            clearInterval(checkInterval);
                            if (ans === q.answer) {
                                score++;
                                showScorePopup("✅", "Correct!", "That was right!");
                            } else {
                                showScorePopup("❌", "Not quite!", q.answer === "ai" ? "That was actually AI-made!" : "That was actually human-made!");
                            }
                            delete container.dataset.answer;
                            current++;
                            setTimeout(render, 1200);
                        }
                    }, 100);
                }
                render();
            }
        },
        e2: {
            title: "🐱 Pet Classifier",
            difficulty: "easy",
            instructions: "Sort each animal into the correct category! Click the animal, then click where it belongs.",
            play(container, footer) {
                const items = [
                    { emoji: "🐕", type: "dog" }, { emoji: "🐈", type: "cat" },
                    { emoji: "🐶", type: "dog" }, { emoji: "😺", type: "cat" },
                    { emoji: "🐕‍🦺", type: "dog" }, { emoji: "🐈‍⬛", type: "cat" },
                    { emoji: "🐩", type: "dog" }, { emoji: "🙀", type: "cat" },
                ];
                let score = 0, current = 0;
                const shuffled = items.sort(() => Math.random() - 0.5);

                function render() {
                    if (current >= shuffled.length) {
                        showScore(score, shuffled.length, "Pet Classifier");
                        return;
                    }
                    const item = shuffled[current];
                    container.innerHTML = `
                        <div class="game-score-bar"><span>Score: ${score}/${shuffled.length}</span><span>${current + 1} of ${shuffled.length}</span></div>
                        <div class="game-instructions">Where does this animal belong?</div>
                        <div style="text-align:center;font-size:64px;margin:24px 0;">${item.emoji}</div>
                        <div style="display:flex;gap:12px;">
                            <button class="btn btn-warm" style="flex:1;font-size:18px" onclick="check('dog')">🐕 Dog</button>
                            <button class="btn btn-outline-warm" style="flex:1;font-size:18px" onclick="check('cat')">🐱 Cat</button>
                        </div>
                    `;
                    window.check = (choice) => {
                        if (choice === item.type) {
                            score++;
                            showScorePopup("✅", "Correct!", "Great classification!");
                        } else {
                            showScorePopup("❌", "Oops!", `That's a ${item.type}!`);
                        }
                        current++;
                        setTimeout(render, 1200);
                    };
                }
                render();
            }
        },
        e3: {
            title: "🔢 Number Pattern",
            difficulty: "easy",
            instructions: "Find the pattern and pick the next number!",
            play(container, footer) {
                const patterns = [
                    { seq: [2, 4, 6, 8], answer: 10, options: [9, 10, 12] },
                    { seq: [5, 10, 15, 20], answer: 25, options: [22, 25, 30] },
                    { seq: [1, 2, 4, 8], answer: 16, options: [12, 14, 16] },
                    { seq: [10, 8, 6, 4], answer: 2, options: [1, 2, 3] },
                    { seq: [3, 6, 9, 12], answer: 15, options: [14, 15, 16] },
                    { seq: [1, 4, 9, 16], answer: 25, options: [20, 25, 30] },
                ];
                let score = 0, current = 0;

                function render() {
                    if (current >= patterns.length) {
                        showScore(score, patterns.length, "Pattern Finder");
                        return;
                    }
                    const p = patterns[current];
                    const opts = [...p.options].sort(() => Math.random() - 0.5);
                    container.innerHTML = `
                        <div class="game-score-bar"><span>Score: ${score}/${patterns.length}</span><span>${current + 1} of ${patterns.length}</span></div>
                        <div class="game-instructions">What comes next in this pattern?</div>
                        <div style="text-align:center;font-size:28px;font-family:'Fredoka',sans-serif;margin:20px 0;color:var(--orange);">${p.seq.join(' → ')} → <strong>?</strong></div>
                        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
                            ${opts.map(o => `<button class="quiz-option" style="width:auto;min-width:80px;text-align:center" onclick="pick(${o})">${o}</button>`).join('')}
                        </div>
                    `;
                    window.pick = (val) => {
                        if (val === p.answer) {
                            score++;
                            showScorePopup("✅", "Correct!", `The answer is ${p.answer}!`);
                        } else {
                            showScorePopup("❌", "Not quite!", `The answer was ${p.answer}`);
                        }
                        current++;
                        setTimeout(render, 1200);
                    };
                }
                render();
            }
        },
        e4: {
            title: "🗣️ Word Match",
            difficulty: "easy",
            instructions: "Match each AI word to its correct meaning!",
            play(container, footer) {
                const pairs = [
                    { word: "Algorithm", meaning: "A set of step-by-step instructions", emoji: "📋" },
                    { word: "Data", meaning: "Information used to train AI", emoji: "📊" },
                    { word: "Model", meaning: "The learned patterns AI uses", emoji: "🧠" },
                    { word: "Training", meaning: "Teaching AI with examples", emoji: "📚" },
                    { word: "Prediction", meaning: "AI's guess based on patterns", emoji: "🔮" },
                ];
                let score = 0, current = 0;
                const shuffled = [...pairs].sort(() => Math.random() - 0.5);

                function render() {
                    if (current >= shuffled.length) {
                        showScore(score, shuffled.length, "Word Master");
                        return;
                    }
                    const pair = shuffled[current];
                    const wrongMeanings = pairs.filter(p => p.meaning !== pair.meaning).sort(() => Math.random() - 0.5).slice(0, 2);
                    const options = [pair, ...wrongMeanings].sort(() => Math.random() - 0.5);

                    container.innerHTML = `
                        <div class="game-score-bar"><span>Score: ${score}/${shuffled.length}</span><span>${current + 1} of ${shuffled.length}</span></div>
                        <div class="game-instructions">What does "<strong>${pair.emoji} ${pair.word}</strong>" mean?</div>
                        <div style="display:flex;flex-direction:column;gap:8px;margin-top:16px;">
                            ${options.map(o => `<button class="quiz-option" onclick="pick(this,'${o.meaning.replace(/'/g, "\\'")}')">${o.meaning}</button>`).join('')}
                        </div>
                    `;
                    window.pick = (btn, meaning) => {
                        document.querySelectorAll('.quiz-option').forEach(b => b.disabled = true);
                        if (meaning === pair.meaning) {
                            btn.classList.add('correct');
                            score++;
                            showScorePopup("✅", "Correct!", `"${pair.word}" means "${pair.meaning}"`);
                        } else {
                            btn.classList.add('wrong');
                            showScorePopup("❌", "Oops!", `"${pair.word}" means "${pair.meaning}"`);
                        }
                        current++;
                        setTimeout(render, 1200);
                    };
                }
                render();
            }
        },
        e5: {
            title: "🌈 Color Sort",
            difficulty: "easy",
            instructions: "Sort items by their color, just like AI classifies data!",
            play(container, footer) {
                const items = [
                    { emoji: "🍎", color: "red", label: "Red" }, { emoji: "🍊", color: "orange", label: "Orange" },
                    { emoji: "🍋", color: "yellow", label: "Yellow" }, { emoji: "🍇", color: "purple", label: "Purple" },
                    { emoji: "🍓", color: "red", label: "Red" }, { emoji: "🥕", color: "orange", label: "Orange" },
                    { emoji: "🍌", color: "yellow", label: "Yellow" }, { emoji: "🫐", color: "purple", label: "Purple" },
                ];
                let score = 0, current = 0;
                const shuffled = items.sort(() => Math.random() - 0.5);

                function render() {
                    if (current >= shuffled.length) {
                        showScore(score, shuffled.length, "Color Sorter");
                        return;
                    }
                    const item = shuffled[current];
                    const colors = ["red", "orange", "yellow", "purple"];
                    container.innerHTML = `
                        <div class="game-score-bar"><span>Score: ${score}/${shuffled.length}</span><span>${current + 1} of ${shuffled.length}</span></div>
                        <div class="game-instructions">What color category does this belong to?</div>
                        <div style="text-align:center;font-size:56px;margin:20px 0;">${item.emoji}</div>
                        <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center;">
                            ${colors.map(c => `<button class="btn ${c === item.color ? 'btn-warm' : 'btn-outline-warm'}" style="min-width:90px" onclick="pick('${c}')">${c}</button>`).join('')}
                        </div>
                    `;
                    window.pick = (color) => {
                        if (color === item.color) {
                            score++;
                            showScorePopup("✅", "Correct!", `That's ${item.color}!`);
                        } else {
                            showScorePopup("❌", "Oops!", `That's actually ${item.color}!`);
                        }
                        current++;
                        setTimeout(render, 1200);
                    };
                }
                render();
            }
        },
        e6: {
            title: "🧩 Shape Match",
            difficulty: "easy",
            instructions: "Match each shape — just like training an AI to recognize patterns!",
            play(container, footer) {
                const shapes = [
                    { emoji: "⭕", name: "Circle" }, { emoji: "⬛", name: "Square" },
                    { emoji: "🔺", name: "Triangle" }, { emoji: "⭐", name: "Star" },
                    { emoji: "💎", name: "Diamond" }, { emoji: "❤️", name: "Heart" },
                ];
                let score = 0, current = 0;
                const shuffled = [...shapes].sort(() => Math.random() - 0.5);

                function render() {
                    if (current >= shuffled.length) {
                        showScore(score, shuffled.length, "Shape Matcher");
                        return;
                    }
                    const shape = shuffled[current];
                    const options = [shape, ...shapes.filter(s => s.name !== shape.name).sort(() => Math.random() - 0.5).slice(0, 2)]
                        .sort(() => Math.random() - 0.5);
                    container.innerHTML = `
                        <div class="game-score-bar"><span>Score: ${score}/${shuffled.length}</span><span>${current + 1} of ${shuffled.length}</span></div>
                        <div class="game-instructions">What is this shape?</div>
                        <div style="text-align:center;font-size:56px;margin:20px 0;">${shape.emoji}</div>
                        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
                            ${options.map(o => `<button class="quiz-option" style="width:auto;min-width:100px;text-align:center" onclick="pick(this,'${o.name}')">${o.name}</button>`).join('')}
                        </div>
                    `;
                    window.pick = (btn, name) => {
                        document.querySelectorAll('.quiz-option').forEach(b => b.disabled = true);
                        if (name === shape.name) {
                            btn.classList.add('correct');
                            score++;
                            showScorePopup("✅", "Correct!", `That's a ${shape.name}!`);
                        } else {
                            btn.classList.add('wrong');
                            showScorePopup("❌", "Oops!", `That was a ${shape.name}!`);
                        }
                        current++;
                        setTimeout(render, 1200);
                    };
                }
                render();
            }
        },

        // MEDIUM GAMES
        me1: {
            title: "🤖 Train the Robot",
            difficulty: "medium",
            instructions: "Teach the robot to classify items by showing examples! Click examples of each category.",
            play(container, footer) {
                const categories = {
                    "🍎 Fruits": { items: ["🍎", "🍊", "🍋", "🍇", "🍓", "🍌"], distractors: ["🥕", "🥦", "🌽"] },
                    "🚗 Vehicles": { items: ["🚗", "🚌", "✈️", "🚢", "🚲", "🚂"], distractors: ["🏠", "🏢", "🏥"] },
                    "🐾 Animals": { items: ["🐕", "🐈", "🐟", "🐦", "🐴", "🐰"], distractors: ["🌳", "🌸", "🌻"] },
                };
                const catNames = Object.keys(categories);
                let score = 0, totalQ = 6, currentQ = 0;

                function render() {
                    if (currentQ >= totalQ) {
                        showScore(score, totalQ, "Robot Trainer");
                        return;
                    }
                    const catIdx = currentQ % catNames.length;
                    const catName = catNames[catIdx];
                    const cat = categories[catName];
                    const allItems = [...cat.items.map(i => ({ emoji: i, isCorrect: true })), ...cat.distractors.map(d => ({ emoji: d, isCorrect: false }))];
                    const testItem = allItems[Math.floor(Math.random() * allItems.length)];

                    container.innerHTML = `
                        <div class="game-score-bar"><span>Score: ${score}/${totalQ}</span><span>Train: ${catName}</span></div>
                        <div class="game-instructions">Does this belong to <strong>${catName}</strong>?</div>
                        <div style="text-align:center;font-size:56px;margin:20px 0;">${testItem.emoji}</div>
                        <div style="display:flex;gap:12px;justify-content:center;">
                            <button class="btn btn-warm" style="flex:1" onclick="decide(true)">✅ Yes!</button>
                            <button class="btn btn-outline-warm" style="flex:1" onclick="decide(false)">❌ No!</button>
                        </div>
                    `;
                    window.decide = (saidYes) => {
                        if (saidYes === testItem.isCorrect) {
                            score++;
                            showScorePopup("✅", "Correct!", "The robot learned something new!");
                        } else {
                            showScorePopup("❌", "Oops!", `That ${testItem.isCorrect ? "does" : "doesn't"} belong to ${catName}`);
                        }
                        currentQ++;
                        setTimeout(render, 1200);
                    };
                }
                render();
            }
        },
        me2: {
            title: "🧩 Pattern Detective",
            difficulty: "medium",
            instructions: "Find the missing piece in each pattern!",
            play(container, footer) {
                const patterns = [
                    { seq: ["🔴", "🔵", "🔴", "🔵", "🔴"], answer: "🔵", opts: ["🔵", "🟢", "🟡"] },
                    { seq: ["⭐", "⭐", "🌙", "⭐", "⭐"], answer: "🌙", opts: ["🌙", "⭐", "☀️"] },
                    { seq: ["1️⃣", "2️⃣", "3️⃣", "4️⃣"], answer: "5️⃣", opts: ["5️⃣", "6️⃣", "4️⃣"] },
                    { seq: ["🟩", "🟩", "🟦", "🟩", "🟩"], answer: "🟦", opts: ["🟦", "🟩", "🟥"] },
                    { seq: ["🎵", "🎵", "🎵", "🔇"], answer: "🎵", opts: ["🎵", "🔇", "🎶"] },
                ];
                let score = 0, current = 0;

                function render() {
                    if (current >= patterns.length) {
                        showScore(score, patterns.length, "Pattern Pro");
                        return;
                    }
                    const p = patterns[current];
                    container.innerHTML = `
                        <div class="game-score-bar"><span>Score: ${score}/${patterns.length}</span><span>${current + 1} of ${patterns.length}</span></div>
                        <div class="game-instructions">What comes next?</div>
                        <div style="text-align:center;font-size:28px;margin:20px 0;letter-spacing:8px;">${p.seq.join(' ')} <strong style="color:var(--orange)">?</strong></div>
                        <div style="display:flex;gap:12px;justify-content:center;">
                            ${p.opts.map(o => `<button class="quiz-option" style="width:auto;min-width:80px;text-align:center;font-size:28px" onclick="pick('${o}')">${o}</button>`).join('')}
                        </div>
                    `;
                    window.pick = (val) => {
                        if (val === p.answer) {
                            score++;
                            showScorePopup("✅", "Correct!", "You found the pattern!");
                        } else {
                            showScorePopup("❌", "Not quite!", `The answer was ${p.answer}`);
                        }
                        current++;
                        setTimeout(render, 1200);
                    };
                }
                render();
            }
        },
        me3: {
            title: "🎵 Music Maker",
            difficulty: "medium",
            instructions: "Complete the melody! Pick the next note that follows the pattern.",
            play(container, footer) {
                const melodies = [
                    { seq: ["Do", "Re", "Mi", "Fa"], answer: "Sol", opts: ["Sol", "La", "Do"] },
                    { seq: ["🎵 C", "🎵 E", "🎵 G"], answer: "🎵 C'", opts: ["🎵 C'", "🎵 B", "🎵 A"] },
                    { seq: ["⬆️ High", "⬇️ Low", "⬆️ High", "⬇️ Low"], answer: "⬆️ High", opts: ["⬆️ High", "⬇️ Low", "➡️ Mid"] },
                    { seq: ["🥁 Boom", "🥁 Tap", "🥁 Boom", "🥁 Tap"], answer: "🥁 Boom", opts: ["🥁 Boom", "🥁 Tap", "ymbal Crash"] },
                    { seq: ["🎵 C", "🎵 D", "🎵 E", "🎵 F"], answer: "🎵 G", opts: ["🎵 G", "🎵 A", "🎵 E"] },
                ];
                let score = 0, current = 0;

                function render() {
                    if (current >= melodies.length) {
                        showScore(score, melodies.length, "Music Master");
                        return;
                    }
                    const m = melodies[current];
                    container.innerHTML = `
                        <div class="game-score-bar"><span>Score: ${score}/${melodies.length}</span><span>${current + 1} of ${melodies.length}</span></div>
                        <div class="game-instructions">Complete the melody pattern!</div>
                        <div style="text-align:center;font-size:22px;margin:20px 0;color:var(--orange-dark);">${m.seq.join(' → ')} → <strong>?</strong></div>
                        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
                            ${m.opts.map(o => `<button class="quiz-option" style="width:auto;min-width:100px;text-align:center" onclick="pick('${o}')">${o}</button>`).join('')}
                        </div>
                    `;
                    window.pick = (val) => {
                        if (val === m.answer) {
                            score++;
                            showScorePopup("✅", "Beautiful!", `The next note is ${m.answer}!`);
                        } else {
                            showScorePopup("❌", "Off key!", `The next note was ${m.answer}`);
                        }
                        current++;
                        setTimeout(render, 1200);
                    };
                }
                render();
            }
        },
        me4: {
            title: "📝 Story Builder",
            difficulty: "medium",
            instructions: "Pick the best word to complete the AI-generated story!",
            play(container, footer) {
                const stories = [
                    { text: "The brave astronaut flew to the ___ and planted a flag.", answer: "Moon", opts: ["Moon", "Kitchen", "Store"] },
                    { text: "The AI robot loved to paint ___ pictures of nature.", answer: "beautiful", opts: ["beautiful", "terrible", "boring"] },
                    { text: "The scientist used AI to discover a ___ planet!", answer: "new", opts: ["new", "old", "tiny"] },
                    { text: "The AI dog could ___ faster than any real dog.", answer: "run", opts: ["run", "sleep", "cry"] },
                    { text: "The smart city used AI to control ___ and traffic.", answer: "lights", opts: ["lights", "cats", "clouds"] },
                ];
                let score = 0, current = 0;

                function render() {
                    if (current >= stories.length) {
                        showScore(score, stories.length, "Story Builder");
                        return;
                    }
                    const s = stories[current];
                    const opts = [...s.opts].sort(() => Math.random() - 0.5);
                    container.innerHTML = `
                        <div class="game-score-bar"><span>Score: ${score}/${stories.length}</span><span>${current + 1} of ${stories.length}</span></div>
                        <div class="game-instructions">Pick the best word to complete the story:</div>
                        <div style="font-size:18px;margin:20px 0;padding:20px;background:var(--warm-bg);border-radius:12px;line-height:1.8;">"${s.text.replace('___', '<strong style="color:var(--orange)">___</strong>')}"</div>
                        <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center;">
                            ${opts.map(o => `<button class="quiz-option" style="width:auto;min-width:100px;text-align:center" onclick="pick(this,'${o}')">${o}</button>`).join('')}
                        </div>
                    `;
                    window.pick = (btn, val) => {
                        document.querySelectorAll('.quiz-option').forEach(b => b.disabled = true);
                        if (val === s.answer) {
                            btn.classList.add('correct');
                            score++;
                            showScorePopup("✅", "Great story!", `"${s.answer}" was the perfect word!`);
                        } else {
                            btn.classList.add('wrong');
                            showScorePopup("❌", "Not quite!", `"${s.answer}" was the best word.`);
                        }
                        current++;
                        setTimeout(render, 1200);
                    };
                }
                render();
            }
        },
        me5: {
            title: "🗺️ Map Explorer",
            difficulty: "medium",
            instructions: "Guide the AI robot through the maze by choosing the right direction at each step!",
            play(container, footer) {
                const steps = [
                    { scene: "🤖 at crossroad", q: "You see water left and mountains right. Goal is the mountain castle.", correct: "right", wrong: "left" },
                    { scene: "🤖 on mountain path", q: "The path splits: uphill (steep) or downhill (easy). Castle is at the top.", correct: "uphill", wrong: "downhill" },
                    { scene: "🤖 at cave entrance", q: "Dark cave or sunny path around. Cave is shorter but dark.", correct: "cave", wrong: "around" },
                    { scene: "🤖 at river", q: "Bridge (longer, safe) or rocks (shorter, risky).", correct: "bridge", wrong: "rocks" },
                    { scene: "🤖 near castle gate", q: "Front gate (guarded) or side door (unlocked).", correct: "side door", wrong: "front gate" },
                ];
                let score = 0, current = 0;

                function render() {
                    if (current >= steps.length) {
                        showScore(score, steps.length, "Explorer");
                        return;
                    }
                    const s = steps[current];
                    container.innerHTML = `
                        <div class="game-score-bar"><span>Score: ${score}/${steps.length}</span><span>Step ${current + 1} of ${steps.length}</span></div>
                        <div style="text-align:center;font-size:24px;margin:12px 0;">${s.scene}</div>
                        <div class="game-instructions">${s.q}</div>
                        <div style="display:flex;gap:12px;margin-top:16px;">
                            <button class="btn btn-warm" style="flex:1" onclick="go('${s.correct}')">➡️ ${s.correct}</button>
                            <button class="btn btn-outline-warm" style="flex:1" onclick="go('${s.wrong}')">⬅️ ${s.wrong}</button>
                        </div>
                    `;
                    window.go = (choice) => {
                        if (choice === s.correct) {
                            score++;
                            showScorePopup("✅", "Great choice!", "You're finding the best path!");
                        } else {
                            showScorePopup("❌", "Wrong path!", `The better choice was "${s.correct}"`);
                        }
                        current++;
                        setTimeout(render, 1200);
                    };
                }
                render();
            }
        },
        me6: {
            title: "🖼️ Image Quiz",
            difficulty: "medium",
            instructions: "Look at each scenario and answer what the AI would detect!",
            play(container, footer) {
                const quizzes = [
                    { scene: "📷 Photo of a red fire truck", q: "What would AI label this?", answer: "Fire Truck", opts: ["Fire Truck", "Bus", "Car"] },
                    { scene: "📷 Photo of a person smiling", q: "What emotion does AI detect?", answer: "Happy", opts: ["Happy", "Sad", "Angry"] },
                    { scene: "📷 Photo of a cat on a keyboard", q: "What objects does AI see?", answer: "Cat and keyboard", opts: ["Cat and keyboard", "Dog and chair", "Bird and table"] },
                    { scene: "📷 Photo of rainy street with umbrellas", q: "What weather does AI detect?", answer: "Rainy", opts: ["Rainy", "Sunny", "Snowy"] },
                    { scene: "📷 Photo of a handwritten number '7'", q: "What number does AI read?", answer: "7", opts: ["7", "1", "9"] },
                ];
                let score = 0, current = 0;

                function render() {
                    if (current >= quizzes.length) {
                        showScore(score, quizzes.length, "Image Analyst");
                        return;
                    }
                    const q = quizzes[current];
                    container.innerHTML = `
                        <div class="game-score-bar"><span>Score: ${score}/${quizzes.length}</span><span>${current + 1} of ${quizzes.length}</span></div>
                        <div style="text-align:center;font-size:18px;margin:8px 0;padding:16px;background:var(--warm-bg);border-radius:12px;">${q.scene}</div>
                        <div class="game-instructions"><strong>${q.q}</strong></div>
                        <div style="display:flex;flex-direction:column;gap:8px;margin-top:12px;">
                            ${q.opts.map(o => `<button class="quiz-option" onclick="pick(this,'${o}')">${o}</button>`).join('')}
                        </div>
                    `;
                    window.pick = (btn, val) => {
                        document.querySelectorAll('.quiz-option').forEach(b => b.disabled = true);
                        if (val === q.answer) {
                            btn.classList.add('correct');
                            score++;
                            showScorePopup("✅", "Correct!", "The AI got it right!");
                        } else {
                            btn.classList.add('wrong');
                            showScorePopup("❌", "Not quite!", `The AI detected "${q.answer}"`);
                        }
                        current++;
                        setTimeout(render, 1200);
                    };
                }
                render();
            }
        },

        // HARD GAMES
        h1: {
            title: "🧠 Neural Net Builder",
            difficulty: "hard",
            instructions: "Connect the layers! Build a neural network by choosing what each layer should do.",
            play(container, footer) {
                const layers = [
                    { question: "Layer 1 receives a photo. What should it detect first?", answer: "Edges and lines", opts: ["Edges and lines", "Full objects", "Emotions", "Colors only"] },
                    { question: "Layer 2 takes edges. What should it find?", answer: "Shapes and patterns", opts: ["Shapes and patterns", "Final answer", "Raw pixels", "Sound"] },
                    { question: "Layer 3 takes shapes. What should it identify?", answer: "Features (eyes, ears, wheels)", opts: ["Features (eyes, ears, wheels)", "Edge directions", "Pixel values", "Training data"] },
                    { question: "Layer 4 takes features. What should it determine?", answer: "Object type (cat, car, person)", opts: ["Object type (cat, car, person)", "Edge contrast", "Shape rotation", "Data source"] },
                    { question: "Final layer. What does it output?", answer: "Prediction with confidence score", opts: ["Prediction with confidence score", "Raw image", "New training data", "Edge map"] },
                ];
                let score = 0, current = 0;

                function render() {
                    if (current >= layers.length) {
                        showScore(score, layers.length, "Neural Net Architect");
                        return;
                    }
                    const l = layers[current];
                    container.innerHTML = `
                        <div class="game-score-bar"><span>Score: ${score}/${layers.length}</span><span>Layer ${current + 1} of ${layers.length}</span></div>
                        <div style="text-align:center;margin:12px 0;">
                            ${layers.slice(0, current).map((_, i) => `<span style="display:inline-block;width:30px;height:30px;background:var(--orange);color:white;border-radius:50%;margin:0 4px;line-height:30px;font-size:14px;">✓</span>`).join('')}
                            <span style="display:inline-block;width:30px;height:30px;background:var(--yellow);color:white;border-radius:50%;margin:0 4px;line-height:30px;font-size:14px;">${current + 1}</span>
                            ${layers.slice(current + 1).map((_, i) => `<span style="display:inline-block;width:30px;height:30px;background:#ddd;color:#999;border-radius:50%;margin:0 4px;line-height:30px;font-size:14px;">${current + 2 + i}</span>`).join('')}
                        </div>
                        <div class="game-instructions"><strong>${l.question}</strong></div>
                        <div style="display:flex;flex-direction:column;gap:8px;margin-top:12px;">
                            ${l.opts.map(o => `<button class="quiz-option" onclick="pick(this,'${o.replace(/'/g, "\\'")}')">${o}</button>`).join('')}
                        </div>
                    `;
                    window.pick = (btn, val) => {
                        document.querySelectorAll('.quiz-option').forEach(b => b.disabled = true);
                        if (val === l.answer) {
                            btn.classList.add('correct');
                            score++;
                            showScorePopup("✅", "Layer built!", `"${l.answer}" is correct for layer ${current + 1}`);
                        } else {
                            btn.classList.add('wrong');
                            showScorePopup("❌", "Wrong connection!", `The correct answer was "${l.answer}"`);
                        }
                        current++;
                        setTimeout(render, 1200);
                    };
                }
                render();
            }
        },
        h2: {
            title: "🔐 Code Breaker",
            difficulty: "hard",
            instructions: "Use logic and patterns to crack each code!",
            play(container, footer) {
                const codes = [
                    { pattern: "Each letter shifts +1: 'Tfu' → ?", answer: "Dog", opts: ["Dog", "Cat", "Bat"] },
                    { pattern: "Numbers represent letters: 1=A, 2=B, 3=C → 4-15-7", answer: "Dog", opts: ["Dog", "Cat", "Cog"] },
                    { pattern: "Reverse: 'olleh' → ?", answer: "hello", opts: ["hello", "world", "olleh"] },
                    { pattern: "A=1, B=2... What word is 7-15-15-4?", answer: "GOOD", opts: ["GOOD", "MOOD", "BOOK"] },
                    { pattern: "Pattern: 2,6,12,20 → Next number?", answer: 30, opts: [30, 24, 36] },
                ];
                let score = 0, current = 0;

                function render() {
                    if (current >= codes.length) {
                        showScore(score, codes.length, "Code Breaker");
                        return;
                    }
                    const c = codes[current];
                    container.innerHTML = `
                        <div class="game-score-bar"><span>Score: ${score}/${codes.length}</span><span>Code ${current + 1} of ${codes.length}</span></div>
                        <div class="game-instructions">🔐 Crack the code!</div>
                        <div style="font-size:20px;text-align:center;margin:16px 0;padding:20px;background:var(--warm-bg);border-radius:12px;font-family:monospace;">${c.pattern}</div>
                        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
                            ${c.opts.map(o => `<button class="quiz-option" style="width:auto;min-width:100px;text-align:center" onclick="crack(${typeof o === 'number' ? o : `'${o}'`})">${o}</button>`).join('')}
                        </div>
                    `;
                    window.crack = (val) => {
                        if (val === c.answer) {
                            score++;
                            showScorePopup("✅", "Code cracked!", "You solved the puzzle!");
                        } else {
                            showScorePopup("❌", "Wrong code!", `The answer was ${c.answer}`);
                        }
                        current++;
                        setTimeout(render, 1200);
                    };
                }
                render();
            }
        },
        h3: {
            title: "🏗️ AI Architect",
            difficulty: "hard",
            instructions: "Design an AI system! Choose the right components for each challenge.",
            play(container, footer) {
                const challenges = [
                    { problem: "Build AI to sort photos of cats and dogs", answer: "Image classifier with CNN", opts: ["Image classifier with CNN", "Chatbot", "Music generator"] },
                    { problem: "Build AI to answer customer questions", answer: "NLP chatbot with language model", opts: ["NLP chatbot with language model", "Self-driving system", "Weather predictor"] },
                    { problem: "Build AI to recommend movies", answer: "Recommendation engine with user data", opts: ["Recommendation engine with user data", "Face recognizer", "Robot controller"] },
                    { problem: "Build AI to detect fraud in bank transactions", answer: "Anomaly detection system", opts: ["Anomaly detection system", "Art generator", "Speech synthesizer"] },
                    { problem: "Build AI to play chess at grandmaster level", answer: "Reinforcement learning agent", opts: ["Reinforcement learning agent", "Image classifier", "Text translator"] },
                ];
                let score = 0, current = 0;

                function render() {
                    if (current >= challenges.length) {
                        showScore(score, challenges.length, "AI Architect");
                        return;
                    }
                    const c = challenges[current];
                    container.innerHTML = `
                        <div class="game-score-bar"><span>Score: ${score}/${challenges.length}</span><span>${current + 1} of ${challenges.length}</span></div>
                        <div class="game-instructions">🏗️ Challenge: <strong>${c.problem}</strong><br>Which AI approach would you use?</div>
                        <div style="display:flex;flex-direction:column;gap:8px;margin-top:12px;">
                            ${c.opts.map(o => `<button class="quiz-option" onclick="design(this,'${o.replace(/'/g, "\\'")}')">${o}</button>`).join('')}
                        </div>
                    `;
                    window.design = (btn, val) => {
                        document.querySelectorAll('.quiz-option').forEach(b => b.disabled = true);
                        if (val === c.answer) {
                            btn.classList.add('correct');
                            score++;
                            showScorePopup("✅", "Great design!", "You chose the right AI approach!");
                        } else {
                            btn.classList.add('wrong');
                            showScorePopup("❌", "Not optimal!", `The best choice was "${c.answer}"`);
                        }
                        current++;
                        setTimeout(render, 1200);
                    };
                }
                render();
            }
        },
        h4: {
            title: "⚖️ Bias Busters",
            difficulty: "hard",
            instructions: "Find and fix unfairness in AI! Identify the bias and choose the fair solution.",
            play(container, footer) {
                const scenarios = [
                    { situation: "A hiring AI mostly picks men because training data had more male employees.", bias: "Gender bias", fix: "Balance training data equally", opts: ["Gender bias — Balance training data equally", "Age bias — Remove all ages", "No bias — AI is fair"] },
                    { situation: "A face recognition system works worse for people with darker skin.", bias: "Racial bias", fix: "Include diverse faces in training", opts: ["Racial bias — Include diverse faces in training", "Lighting bias — Only use bright photos", "No bias — Technology limitation"] },
                    { situation: "A loan AI gives higher interest rates to people from certain neighborhoods.", bias: "Socioeconomic bias", fix: "Remove address from decision factors", opts: ["Socioeconomic bias — Remove address from decision factors", "Geographic bias — Move everyone to rich areas", "No bias — Neighborhoods matter"] },
                    { situation: "A medical AI trained mostly on men doesn't work well for women.", bias: "Medical gender bias", fix: "Include equal male and female patients", opts: ["Medical gender bias — Include equal male and female patients", "Age bias — Only treat young people", "No bias — Medicine is universal"] },
                    { situation: "An AI translator defaults to 'he' for doctors and 'she' for nurses.", bias: "Stereotype bias", fix: "Train with gender-neutral examples", opts: ["Stereotype bias — Train with gender-neutral examples", "Language bias — Stop translating", "No bias — Statistical accuracy"] },
                ];
                let score = 0, current = 0;

                function render() {
                    if (current >= scenarios.length) {
                        showScore(score, scenarios.length, "Bias Buster");
                        return;
                    }
                    const s = scenarios[current];
                    container.innerHTML = `
                        <div class="game-score-bar"><span>Score: ${score}/${scenarios.length}</span><span>${current + 1} of ${scenarios.length}</span></div>
                        <div class="game-instructions">⚖️ <strong>Bias Detection:</strong></div>
                        <div style="padding:16px;background:var(--warm-bg);border-radius:12px;margin:12px 0;font-size:15px;">${s.situation}</div>
                        <p style="font-weight:700;margin-bottom:8px;">What's the bias and how do you fix it?</p>
                        <div style="display:flex;flex-direction:column;gap:8px;">
                            ${s.opts.map(o => `<button class="quiz-option" onclick="bust(this,'${o.replace(/'/g, "\\'")}')">${o}</button>`).join('')}
                        </div>
                    `;
                    window.bust = (btn, val) => {
                        document.querySelectorAll('.quiz-option').forEach(b => b.disabled = true);
                        const correctAnswer = s.opts[0];
                        if (val === correctAnswer) {
                            btn.classList.add('correct');
                            score++;
                            showScorePopup("✅", "Bias busted!", "You found and fixed the unfairness!");
                        } else {
                            btn.classList.add('wrong');
                            showScorePopup("❌", "Not quite!", `The correct fix was: ${correctAnswer}`);
                        }
                        current++;
                        setTimeout(render, 1200);
                    };
                }
                render();
            }
        },
        h5: {
            title: "🎯 Decision Tree",
            difficulty: "hard",
            instructions: "Build a decision tree! Answer yes/no questions to classify items correctly.",
            play(container, footer) {
                const items = [
                    { target: "🐕 Dog", questions: ["Does it bark?", "Does it have fur?", "Is it bigger than a cat?"], answers: [true, true, true] },
                    { target: "🐈 Cat", questions: ["Does it bark?", "Does it have fur?", "Does it meow?"], answers: [false, true, true] },
                    { target: "🐦 Bird", questions: ["Does it fly?", "Does it have feathers?", "Can it swim?"], answers: [true, true, false] },
                    { target: "🐟 Fish", questions: ["Does it live in water?", "Does it have gills?", "Does it have legs?"], answers: [true, true, false] },
                ];
                let score = 0, currentItem = 0, currentQ = 0;
                const shuffled = [...items].sort(() => Math.random() - 0.5);

                function render() {
                    if (currentItem >= shuffled.length) {
                        showScore(score, shuffled.length, "Decision Tree Builder");
                        return;
                    }
                    const item = shuffled[currentItem];
                    if (currentQ >= item.questions.length) {
                        showScorePopup("✅", "Classified!", `That was a ${item.target}!`);
                        score++;
                        currentItem++;
                        currentQ = 0;
                        setTimeout(render, 1200);
                        return;
                    }
                    container.innerHTML = `
                        <div class="game-score-bar"><span>Score: ${score}/${shuffled.length}</span><span>Classifying: ${currentItem + 1} of ${shuffled.length}</span></div>
                        <div class="game-instructions">🌲 Decision Tree — Level ${currentQ + 1}</div>
                        <div style="text-align:center;margin:16px 0;">
                            ${item.questions.slice(0, currentQ).map((q, i) => `<div style="margin:4px 0;font-size:14px;color:var(--text-light);">✓ ${q} → <strong>${item.answers[i] ? 'Yes' : 'No'}</strong></div>`).join('')}
                            <div style="font-size:20px;font-weight:700;color:var(--orange);margin-top:8px;">${item.questions[currentQ]}</div>
                        </div>
                        <div style="display:flex;gap:12px;justify-content:center;">
                            <button class="btn btn-warm" style="flex:1" onclick="answer(true)">✅ Yes</button>
                            <button class="btn btn-outline-warm" style="flex:1" onclick="answer(false)">❌ No</button>
                        </div>
                    `;
                    window.answer = (val) => {
                        if (val === item.answers[currentQ]) {
                            showScorePopup("✅", "Correct!", "Moving to next question...");
                        } else {
                            showScorePopup("❌", "Wrong!", `Answer was ${item.answers[currentQ] ? 'Yes' : 'No'}`);
                            currentItem++;
                            currentQ = 0;
                            setTimeout(render, 1200);
                            return;
                        }
                        currentQ++;
                        setTimeout(render, 800);
                    };
                }
                render();
            }
        },
        h6: {
            title: "🏆 AI Challenge",
            difficulty: "hard",
            instructions: "The ultimate test! Answer 10 questions about everything you've learned to win!",
            play(container, footer) {
                const allQuestions = [
                    { q: "What does CNN stand for in AI?", answer: "Convolutional Neural Network", opts: ["Convolutional Neural Network", "Computer Neural Network", "Connected Node Network"] },
                    { q: "What is backpropagation?", answer: "Adjusting neurons after finding errors", opts: ["Adjusting neurons after finding errors", "Moving data forward", "Cleaning data"] },
                    { q: "What causes AI bias?", answer: "Unrepresentative training data", opts: ["Unrepresentative training data", "Fast computers", "Too much code"] },
                    { q: "What does NLP stand for?", answer: "Natural Language Processing", opts: ["Natural Language Processing", "New Learning Program", "Neural Language Pattern"] },
                    { q: "How do reinforcement learning agents learn?", answer: "By trial and error with rewards", opts: ["By trial and error with rewards", "By reading textbooks", "By copying humans"] },
                    { q: "What is a neural network layer?", answer: "A group of neurons that process similar information", opts: ["A group of neurons that process similar information", "A hard drive partition", "A type of internet connection"] },
                    { q: "What is overfitting?", answer: "AI memorizes training data but fails on new data", opts: ["AI memorizes training data but fails on new data", "AI is too slow", "AI uses too much memory"] },
                    { q: "What is transfer learning?", answer: "Using knowledge from one task for a new task", opts: ["Using knowledge from one task for a new task", "Moving files between computers", "Transferring money online"] },
                    { q: "What does GAN stand for?", answer: "Generative Adversarial Network", opts: ["Generative Adversarial Network", "General AI Network", "Global Analysis Node"] },
                    { q: "What is the main goal of AI ethics?", answer: "Ensuring AI is fair, safe, and beneficial", opts: ["Ensuring AI is fair, safe, and beneficial", "Making AI faster", "Making AI cheaper"] },
                ];
                let score = 0, current = 0;
                const shuffled = allQuestions.sort(() => Math.random() - 0.5).slice(0, 10);

                function render() {
                    if (current >= shuffled.length) {
                        showScore(score, shuffled.length, "AI Champion");
                        return;
                    }
                    const q = shuffled[current];
                    container.innerHTML = `
                        <div class="game-score-bar"><span>Score: ${score}/${shuffled.length}</span><span>Q${current + 1} of ${shuffled.length}</span></div>
                        <div class="game-instructions"><strong>🏆 Final Challenge:</strong></div>
                        <div style="font-size:18px;font-weight:700;margin:16px 0;color:var(--text-dark);">${q.q}</div>
                        <div style="display:flex;flex-direction:column;gap:8px;">
                            ${q.opts.map(o => `<button class="quiz-option" onclick="answer(this,'${o.replace(/'/g, "\\'")}')">${o}</button>`).join('')}
                        </div>
                    `;
                    window.answer = (btn, val) => {
                        document.querySelectorAll('.quiz-option').forEach(b => b.disabled = true);
                        if (val === q.answer) {
                            btn.classList.add('correct');
                            score++;
                            showScorePopup("✅", "Correct!", `${score}/${current + 1} so far!`);
                        } else {
                            btn.classList.add('wrong');
                            showScorePopup("❌", "Not quite!", `The answer was "${q.answer}"`);
                        }
                        current++;
                        setTimeout(render, 1200);
                    };
                }
                render();
            }
        }
    };
}

// ============================================================
// Modal / Navigation Logic
// ============================================================
let currentLessonId = null;
let currentLessonPage = 0;

function openLesson(id) {
    const lesson = lessons[id];
    if (!lesson) return;
    currentLessonId = id;
    currentLessonPage = 0;
    renderLessonPage();
    document.getElementById('lessonModal').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function renderLessonPage() {
    const lesson = lessons[currentLessonId];
    const page = lesson.pages[currentLessonPage];
    document.getElementById('lessonTitle').textContent = lesson.title;
    document.getElementById('lessonBody').innerHTML = page.content;
    document.getElementById('lessonPageInfo').textContent = `Page ${currentLessonPage + 1} of ${lesson.pages.length}`;
    document.getElementById('lessonPrev').style.display = currentLessonPage === 0 ? 'none' : '';
    document.getElementById('lessonNext').textContent = currentLessonPage === lesson.pages.length - 1 ? 'Finish ✓' : 'Next →';
}

function nextLessonPage() {
    const lesson = lessons[currentLessonId];
    if (currentLessonPage < lesson.pages.length - 1) {
        currentLessonPage++;
        renderLessonPage();
    } else {
        closeModal('lessonModal');
        showScorePopup("🎉", "Lesson Complete!", "Great job finishing this lesson!");
    }
}

function prevLessonPage() {
    if (currentLessonPage > 0) {
        currentLessonPage--;
        renderLessonPage();
    }
}

function openGame(id) {
    const games = getGames();
    const game = games[id];
    if (!game) return;
    document.getElementById('gameTitle').textContent = game.title;
    document.getElementById('gameBody').innerHTML = '';
    document.getElementById('gameFooter').innerHTML = '';
    document.getElementById('gameModal').classList.add('open');
    document.body.style.overflow = 'hidden';
    game.play(document.getElementById('gameBody'), document.getElementById('gameFooter'));
}

function closeModal(id) {
    document.getElementById(id).classList.remove('open');
    document.body.style.overflow = '';
}

function showScorePopup(emoji, text, detail) {
    document.getElementById('scoreEmoji').textContent = emoji;
    document.getElementById('scoreText').textContent = text;
    document.getElementById('scoreDetail').textContent = detail;
    document.getElementById('scorePopup').classList.remove('hidden');
}

function closeScore() {
    document.getElementById('scorePopup').classList.add('hidden');
}

function showScore(score, total, gameName) {
    const percent = Math.round((score / total) * 100);
    let emoji = "🎉", msg = "Amazing!";
    if (percent < 50) { emoji = "💪"; msg = "Keep practicing!"; }
    else if (percent < 80) { emoji = "👍"; msg = "Good job!"; }
    document.getElementById('scoreEmoji').textContent = emoji;
    document.getElementById('scoreText').textContent = `${msg} ${gameName} Complete!`;
    document.getElementById('scoreDetail').textContent = `You scored ${score}/${total} (${percent}%)`;
    document.getElementById('scorePopup').classList.remove('hidden');
}

function checkAnswer(btn, correct) {
    const area = btn.closest('.quiz-area');
    if (!area) return;
    area.querySelectorAll('.quiz-option').forEach(b => b.disabled = true);
    if (correct) {
        btn.classList.add('correct');
        showScorePopup("✅", "Correct!", "Well done!");
    } else {
        btn.classList.add('wrong');
        area.querySelectorAll('.quiz-option').forEach(b => {
            if (b.onclick && b.onclick.toString().includes('true')) b.classList.add('correct');
        });
        showScorePopup("❌", "Not quite!", "Try to remember this for next time!");
    }
}

// ============================================================
// Tab Switching
// ============================================================
function setupTabs() {
    document.querySelectorAll('.diff-tab[data-diff]').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.diff-tab[data-diff]').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const diff = tab.dataset.diff;
            ['beginner', 'medium', 'hard'].forEach(d => {
                const grid = document.getElementById(`lessons-${d}`);
                if (grid) grid.classList.toggle('hidden', d !== diff);
            });
        });
    });

    document.querySelectorAll('.diff-tab[data-gdiff]').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.diff-tab[data-gdiff]').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const diff = tab.dataset.gdiff;
            ['easy', 'medium', 'hard'].forEach(d => {
                const grid = document.getElementById(`games-${d}`);
                if (grid) grid.classList.toggle('hidden', d !== diff);
            });
        });
    });
}

// ============================================================
// Mobile Nav
// ============================================================
function setupMobileNav() {
    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('navMenu');
    toggle.addEventListener('click', () => menu.classList.toggle('open'));
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('open');
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
}

// ============================================================
// Back to Top
// ============================================================
function setupBackToTop() {
    const btn = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);
    });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ============================================================
// Smooth Scroll for Nav Links
// ============================================================
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ============================================================
// Close Modals on Overlay Click
// ============================================================
function setupModalClose() {
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.remove('open');
                document.body.style.overflow = '';
            }
        });
    });
}

// ============================================================
// AI CHATBOT - Teaches Kids How to Use the Web
// ============================================================
const chatResponses = {
    // SEARCHING
    "search|google|find|look up|searching": {
        answer: `Great question! Here's how to search on Google: 🔍\n\n<ul>\n<li><strong>Step 1:</strong> Open your browser (Chrome, Safari, Edge)</li>\n<li><strong>Step 2:</strong> Go to <strong>google.com</strong></li>\n<li><strong>Step 3:</strong> Type what you want to know in the search box</li>\n<li><strong>Step 4:</strong> Press Enter or click the magnifying glass!</li>\n</ul>\n\n<div class="tip-box">💡 <strong>Pro Tip:</strong> Use specific words! Instead of "dogs," try "how to take care of a puppy" for better results!</div>`,
        followups: ["How do I know if a website is safe?", "What is a browser?", "How do I use ChatGPT?"]
    },

    // BROWSER
    "browser|chrome|safari|edge|firefox|internet": {
        answer: `A <strong>browser</strong> is the app you use to visit websites! 🌐\n\n<p>Think of it like a window to the internet. Common browsers:</p>\n<ul>\n<li>🟢 <strong>Google Chrome</strong> — Most popular, made by Google</li>\n<li>🔵 <strong>Microsoft Edge</strong> — Comes with Windows computers</li>\n<li>🦊 <strong>Mozilla Firefox</strong> — Focuses on privacy</li>\n<li>🧭 <strong>Safari</strong> — Made for iPhones, iPads, and Macs</li>\n</ul>\n\n<p>You're using a browser right now to read this! 😄</p>\n\n<div class="tip-box">💡 <strong>Fun Fact:</strong> The address bar at the top is where you type website addresses like "google.com" or "wikipedia.org"!</div>`,
        followups: ["How do I search on Google?", "How do I stay safe online?", "What are bookmarks?"]
    },

    // SAFETY
    "safe|safety|protect|security|private|privacy": {
        answer: `Staying safe online is SUPER important! 🛡️ Here are the golden rules:\n\n<ul>\n<li>🔒 <strong>Never share</strong> your full name, address, school, or phone number with strangers online</li>\n<li>🔑 <strong>Use strong passwords</strong> (I'll teach you how!)</li>\n<li>🚫 <strong>Don't click</strong> on weird pop-ups or links from people you don't know</li>\n<li>👨‍👩‍👧 <strong>Tell a parent</strong> if something online makes you uncomfortable</li>\n<li>📧 <strong>Don't open</strong> emails from people you don't know</li>\n<li>🎮 <strong>Be kind</strong> to others online — cyberbullying hurts!</li>\n</ul>\n\n<div class="tip-box">💡 <strong>Remember:</strong> If something feels wrong, it probably is! Always ask a trusted adult for help.</div>`,
        followups: ["How do I make a strong password?", "What are scams?", "How do I report something bad online?"]
    },

    // PASSWORDS
    "password|strong|pin|code|lock": {
        answer: `A strong password keeps your accounts safe! 🔑 Here's how to make one:\n\n<ul>\n<li>✅ Make it <strong>at least 8 characters</strong> long</li>\n<li>✅ Use <strong>uppercase AND lowercase</strong> letters (A and a)</li>\n<li>✅ Add <strong>numbers</strong> (like 3, 7, 0)</li>\n<li>✅ Add <strong>symbols</strong> (like !, @, #, $)</li>\n<li>❌ Don't use your name or birthday</li>\n<li>❌ Don't use "password123" — everyone tries that!</li>\n</ul>\n\n<p><strong>Example of a strong password:</strong> <code>MyDog$Loves2Play!</code></p>\n\n<div class="tip-box">💡 <strong>Pro Tip:</strong> Use a different password for every website! That way if one gets hacked, the others are still safe. You can write them in a notebook and keep it in a safe place.</div>`,
        followups: ["How do I stay safe online?", "What is two-factor authentication?", "How do I use ChatGPT?"]
    },

    // SCAMS
    "scam|fake|trick|cheat|lie|fraud|pop-up|pop up|virus|malware": {
        answer: `Scams are tricks bad people use online. Here's how to spot them! ⚠️\n\n<ul>\n<li>📧 <strong>"You won a prize!"</strong> — You didn't! It's a scam to get your info</li>\n<li>💰 <strong>"Send me money/gift cards"</strong> — Real people won't ask for this online</li>\n<li>🔗 <strong>Weird links</strong> — Don't click links that look strange or misspelled</li>\n<li>😱 <strong>"Your account is hacked!"</strong> — Real companies don't scare you like this</li>\n<li>📱 <strong>"Download this free thing!"</strong> — Free downloads can have viruses</li>\n<li>👤 <strong>Strangers asking personal questions</strong> — Never answer!</li>\n</ul>\n\n<div class="tip-box">💡 <strong>Golden Rule:</strong> If it sounds too good to be true, it IS too good to be true! Ask a parent if you're unsure.</div>`,
        followups: ["How do I stay safe online?", "How do I make a strong password?", "What is a virus?"]
    },

    // CHATGPT / AI TOOLS
    "chatgpt|chat gpt|openai|ai chat|ai tool|ai assistant|copilot|gemini|claude": {
        answer: `<strong>ChatGPT</strong> and other AI tools are like talking to a super-smart robot friend! 🤖\n\n<p>Here's how they work:</p>\n<ul>\n<li>💬 You <strong>type a question</strong> or tell it what you need</li>\n<li>🧠 The AI <strong>thinks about</strong> patterns it learned from millions of books and websites</li>\n<li>📝 It <strong>writes an answer</strong> just for you!</li>\n</ul>\n\n<p>You can use AI to:</p>\n<ul>\nli>📚 Get help with homework (but do the work yourself!)</li>\n<li>🎨 Get ideas for art projects</li>\n<li>📖 Explain hard topics in simple words</li>\n<li>🗣️ Practice a language</li>\n<li>💡 Brainstorm creative ideas</li>\n</ul>\n\n<div class="tip-box">💡 <strong>Important:</strong> AI can make mistakes! Always double-check important info. And never share personal details with AI tools.</div>`,
        followups: ["How do I search on Google?", "Is AI always right?", "How do I use AI safely?"]
    },

    // AI MISTAKES
    "mistake|wrong|error|hallucinate|right|correct|accurate|reliable|trust": {
        answer: `Great question! AI is smart, but it's NOT perfect! 🧠\n\n<ul>\n<li>⚠️ AI can <strong>"hallucinate"</strong> — make up facts that sound real but aren't</li>\n<li>📚 AI's info might be <strong>outdated</strong> — it might not know about recent events</li>\n<li>🔄 AI <strong>learns from patterns</strong>, not real understanding — it doesn't truly "know" things</li>\n<li>📝 AI can <strong>copy mistakes</strong> from its training data</li>\n</ul>\n\n<p><strong>How to use AI wisely:</strong></p>\n<ul>\n<li>✅ Use AI as a <strong>starting point</strong>, not the final answer</li>\n<li>✅ <strong>Cross-check</strong> with other sources like books or trusted websites</li>\n<li>✅ Ask AI to <strong>"show its sources"</strong> when possible</li>\n<li>✅ If something seems wrong, <strong>trust your gut!</strong></li>\n</ul>\n\n<div class="tip-box">💡 <strong>Remember:</strong> AI is a tool to HELP you, not replace your own thinking!</div>`,
        followups: ["How do I use ChatGPT?", "How do I search Google well?", "What are good websites for kids?"]
    },

    // EMAIL
    "email|gmail|mail|inbox|send": {
        answer: `Email is like sending a letter, but on the computer! 📧\n\n<p>Here's how email works:</p>\n<ul>\n<li>📬 An <strong>email address</strong> looks like: yourname@gmail.com</li>\n<li>✍️ You write a <strong>message</strong> and add a <strong>subject</strong> (like a title)</li>\n<li>📨 Click <strong>Send</strong> and it arrives instantly!</li>\n<li>📥 Check your <strong>inbox</strong> for new messages</li>\n</ul>\n\n<div class="tip-box">💡 <strong>Safety:</strong> Never open attachments or click links in emails from strangers! If an email looks suspicious, show it to a parent.</div>`,
        followups: ["How do I stay safe online?", "What are scams?", "How do I use a browser?"]
    },

    // WEBSITES / BOOKMARKS
    "bookmark|save|favorite|website|url|address|link": {
        answer: `Bookmarks save websites you like so you can find them later! ⭐\n\n<p><strong>How to bookmark a page:</strong></p>\n<ul>\n<li>👆 Click the <strong>star icon</strong> (⭐) in the address bar</li>\n<li>📂 Choose a folder to save it in</li>\n<li>✅ Done! Now it's in your bookmarks!</li>\n</ul>\n\n<p><strong>To find your bookmarks later:</strong></p>\n<ul>\n<li>Press <strong>Ctrl+D</strong> (or <strong>Cmd+D</strong> on Mac) to bookmark</li>\n<li>Press <strong>Ctrl+Shift+O</strong> to see all your bookmarks</li>\n</ul>\n\n<div class="tip-box">💡 <strong>Pro Tip:</strong> Organize your bookmarks into folders like "School," "Games," and "Fun Stuff" to stay organized!</div>`,
        followups: ["How do I use a browser?", "What are good websites for kids?", "How do I search Google?"]
    },

    // GOOD WEBSITES
    "good website|best site|kid|children|appropriate|safe site|learn|education|wikipedia": {
        answer: `Here are some awesome safe websites for kids! 🌟\n\n<ul>\n<li>📖 <strong>Wikipedia</strong> — Free encyclopedia with info about everything</li>\n<li>🎓 <strong>Khan Academy</strong> — Free lessons on all subjects</li>\n<li>🧪 <strong>National Geographic Kids</strong> — Cool science and nature</li>\n<li>🎮 <strong>Scratch</strong> — Make your own games and animations</li>\n<li>📚 <strong>Storyline Online</strong> — Celebrities read kids' books aloud</li>\n<li>🌍 <strong>Google Earth</strong> — Explore the whole world from your room!</li>\n<li>🔬 <strong>NASA Kids</strong> — Space and science fun</li>\n<li>🎨 <strong>Procreate (iPad)</strong> — Digital art creation</li>\n</ul>\n\n<div class="tip-box">💡 <strong>Safety Tip:</strong> Always ask a parent before visiting a new website! Stick to sites they approve of.</div>`,
        followups: ["How do I stay safe online?", "How do I use bookmarks?", "What is ChatGPT?"]
    },

    // DOWNLOADS
    "download|install|app|software|free": {
        answer: `Downloads let you save things from the internet! 📥\n\n<ul>\n<li>⬇️ Click a <strong>download button</strong> to save a file</li>\n<li>📁 Files go to your <strong>Downloads folder</strong></li>\n<li>🔒 <strong>Only download</strong> from trusted websites</li>\n<li>⚠️ <strong>NEVER download</strong> from pop-ups that say "You're infected!"</li>\n</ul>\n\n<p><strong>Safe download rules:</strong></p>\n<ul>\n<li>✅ Ask a parent before downloading anything</li>\n<li>✅ Only use official app stores (Google Play, Apple App Store)</li>\n<li>❌ Don't download "free" versions of paid software — they often have viruses!</li>\n<li>❌ Don't click "Download" buttons on random websites</li>\n</ul>\n\n<div class="tip-box">💡 <strong>Remember:</strong> If a download feels sketchy, don't do it! Your computer's safety comes first.</div>`,
        followups: ["What are viruses?", "How do I stay safe online?", "What is a browser?"]
    },

    // COOKIES / TRACKING
    "cookie|tracking|track|data|information collected": {
        answer: `Cookies are small files websites save on your computer! 🍪\n\n<p>They're NOT the chocolate chip kind! Here's what they do:</p>\n<ul>\n<li>📝 They <strong>remember you</strong> — like keeping you logged in</li>\n<li>🎯 They <strong>track what you like</strong> — so ads show things you might want</li>\n<li>⚙️ They <strong>save your settings</strong> — like dark mode or language</li>\n</ul>\n\n<p><strong>Should you worry?</strong></p>\n<ul>\n<li>✅ Most cookies are <strong>harmless</strong> and helpful</li>\n<li>⚠️ Some <strong>tracking cookies</strong> watch what you do across websites</li>\n<li>🛡️ You can <strong>clear cookies</strong> in your browser settings for more privacy</li>\n</ul>\n\n<div class="tip-box">💡 <strong>Pro Tip:</strong> You can set your browser to reject tracking cookies for better privacy! Ask a parent to help.</div>`,
        followups: ["How do I stay safe online?", "What is privacy?", "How do I clear my history?"]
    },

    // YOUTUBE
    "youtube|video|watch|stream": {
        answer: `YouTube is a website where you can watch and share videos! 🎬\n\n<ul>\n<li>🔍 <strong>Search</strong> for any topic you're interested in</li>\n<li>📺 <strong>Subscribe</strong> to channels you like</li>\n<li>👍 <strong>Like</strong> videos to help the creator</li>\n<li>🔔 Turn on <strong>notifications</strong> for new videos</li>\n</ul>\n\n<p><strong>Stay safe on YouTube:</strong></p>\n<ul>\n<li>✅ Use <strong>YouTube Kids</strong> — a safer version for younger viewers</li>\n<li>✅ Don't share personal info in comments</li>\n<li>⚠️ Not everything on YouTube is true — verify with other sources</li>\n<li>⏰ Set <strong>screen time limits</strong> — don't watch all day!</li>\n</ul>\n\n<div class="tip-box">💡 <strong>Fun Fact:</strong> You can learn almost ANYTHING on YouTube! Try searching for "how to draw," "science experiments," or "coding for kids"!</div>`,
        followups: ["How do I stay safe online?", "What are good websites for kids?", "How do downloads work?"]
    },

    // SOCIAL MEDIA
    "social media|instagram|tiktok|snapchat|facebook|twitter|discord": {
        answer: `Social media is where people connect and share online! 📱\n\n<ul>\n<li>📸 <strong>Instagram</strong> — Share photos and stories</li>\n<li>🎵 <strong>TikTok</strong> — Short fun videos</li>\n<li>👻 <strong>Snapchat</strong> — Messages that disappear</li>\n<li>🎮 <strong>Discord</strong> — Chat about games and hobbies</li>\n</ul>\n\n<p><strong>Rules for kids on social media:</strong></p>\n<ul>\n<li>🔒 <strong>Make your account PRIVATE</strong> — only friends can see your posts</li>\n<li>👤 <strong>Don't use your real full name</strong> — use a nickname</li>\n<li>📸 <strong>Never share</strong> photos of your school, home, or address</li>\n<li>🚫 <strong>Don't talk to strangers</strong> — block anyone who makes you uncomfortable</li>\n<li>👨‍👩‍👧 <strong>Ask your parents first!</strong> Many platforms have age limits (usually 13+)</li>\n</ul>\n\n<div class="tip-box">💡 <strong>Remember:</strong> What you post online can stay forever! Think before you share.</div>`,
        followups: ["How do I stay safe online?", "What is privacy?", "How do I report someone?"]
    },

    // TYPING / KEYBOARD
    "type|typing|keyboard|keys": {
        answer: `Let me help you type better on the keyboard! ⌨️\n\n<ul>\n<li>👆 Use your <strong>fingers on the home row</strong> (A S D F J K L ;)</li>\n<li>👀 Try to <strong>look at the screen, not the keyboard</strong></li>\n<li>📝 Practice with <strong>typing games</strong> online — it's fun!</li>\n<li>🔤 Use <strong>Shift</strong> for capital letters</li>\n<li>🚀 Use <strong>Tab</strong> to move between boxes</li>\n<li>↩️ Press <strong>Enter</strong> to send or go to next line</li>\n</ul>\n\n<div class="tip-box">💡 <strong>Pro Tip:</strong> Try <strong>typingclub.com</strong> or <strong>typing.com</strong> — they have free lessons to make you a fast typist!</div>`,
        followups: ["How do I use a browser?", "What are good websites for kids?", "How do I search Google?"]
    },

    // HISTORY
    "history|clear|browsing|recent": {
        answer: `Your browser keeps a list of every website you visit — that's called <strong>browsing history</strong>! 📜\n\n<ul>\n<li>🔍 You can see it by pressing <strong>Ctrl+H</strong></li>\n<li>🗑️ To clear it: go to Settings → Clear browsing data</li>\n<li>🧾 Clearing history is good for <strong>privacy</strong>!</li>\n</ul>\n\n<div class="tip-box">💡 <strong>Privacy Tip:</strong> If you're using a shared computer, always clear your history when you're done! It keeps your activity private.</div>`,
        followups: ["How do I stay safe online?", "What are cookies?", "How do bookmarks work?"]
    },

    // HELLO / GREETINGS
    "hello|hi|hey|howdy|sup|yo|greetings": {
        answer: `Hey there! 👋 Welcome to AI Buddy!\n\n<p>I'm here to help you learn how to use the internet safely and smartly! I can teach you about:</p>\n<ul>\n<li>🔍 How to search on Google</li>\n<li>🌐 What browsers are and how to use them</li>\n<li>🛡️ How to stay safe online</li>\n<li>🔑 Making strong passwords</li>\n<li>⚠️ Avoiding scams</li>\n<li>🤖 How to use AI tools like ChatGPT</li>\n<li>📧 Email basics</li>\n<li>📱 Social media safety</li>\n<li>...and much more!</li>\n</ul>\n\n<p>Just ask me anything! 😊</p>`,
        followups: ["How do I search on Google?", "How do I stay safe online?", "What is ChatGPT?"]
    },

    // THANKS
    "thanks|thank you|thx|ty|appreciate": {
        answer: `You're welcome! 😊 I'm always here to help!\n\n<p>Is there anything else you'd like to learn about? Just ask!</p>`,
        followups: ["How do I search on Google?", "How do I stay safe online?", "What are good websites for kids?"]
    },

    // HELP
    "help|what can you|what do you|topics": {
        answer: `I can teach you lots of things about using the web! 🌟 Here's what I know:\n\n<ul>\n<li>🔍 <strong>Searching</strong> — How to find things on Google</li>\n<li>🌐 <strong>Browsers</strong> — What they are and how to use them</li>\n<li>🛡️ <strong>Safety</strong> — Staying safe and protected online</li>\n<li>🔑 <strong>Passwords</strong> — Making strong, secure passwords</li>\n<li>⚠️ <strong>Scams</strong> — Spotting and avoiding tricks</li>\n<li>🤖 <strong>AI Tools</strong> — Using ChatGPT and other AI assistants</li>\n<li>📧 <strong>Email</strong> — How to send and receive messages</li>\n<li>📱 <strong>Social Media</strong> — Using platforms safely</li>\n<li>📥 <strong>Downloads</strong> — Getting files safely</li>\n<li>⭐ <strong>Bookmarks</strong> — Saving your favorite sites</li>\n<li>🎬 <strong>YouTube</strong> — Watching videos safely</li>\n<li>🍪 <strong>Cookies & Tracking</strong> — Understanding privacy</li>\n</ul>\n\n<p>Just type your question or click one of the suggestion buttons! 😄</p>`,
        followups: ["How do I search on Google?", "How do I stay safe online?", "What is ChatGPT?"]
    },

    // DEFAULT / FALLBACK
    "default": {
        answer: `Hmm, I'm not sure I understand that one! 🤔\n\n<p>But here are some things I CAN help you with:</p>\n<ul>\n<li>🔍 How to search on Google</li>\n<li>🌐 What is a browser</li>\n<li>🛡️ How to stay safe online</li>\n<li>🔑 How to make strong passwords</li>\n<li>⚠️ How to avoid scams</li>\n<li>🤖 How to use ChatGPT and AI tools</li>\n<li>📧 How to use email</li>\n<li>📱 Social media safety</li>\n</ul>\n\n<p>Try asking about one of these topics! Or type <strong>"help"</strong> to see everything I know! 😊</p>`,
        followups: ["How do I search on Google?", "How do I stay safe online?", "What is ChatGPT?"]
    }
};

// Chat state
let chatHistory = [];

function findResponse(input) {
    const lower = input.toLowerCase().trim();

    for (const [keywords, response] of Object.entries(chatResponses)) {
        if (keywords === 'default') continue;
        const words = keywords.split('|');
        if (words.some(word => lower.includes(word))) {
            return response;
        }
    }
    return chatResponses.default;
}

function formatMessage(text) {
    return text.replace(/\n/g, '<br>');
}

function addChatMessage(text, isUser = false) {
    const messagesEl = document.getElementById('chatMessages');
    const msgDiv = document.createElement('div');
    msgDiv.className = `chat-msg ${isUser ? 'user' : 'bot'}`;

    const avatar = document.createElement('div');
    avatar.className = 'chat-avatar';
    avatar.textContent = isUser ? '😊' : '🤖';

    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble';
    bubble.innerHTML = formatMessage(text);

    msgDiv.appendChild(avatar);
    msgDiv.appendChild(bubble);
    messagesEl.appendChild(msgDiv);
    messagesEl.scrollTop = messagesEl.scrollHeight;
}

function addTypingIndicator() {
    const messagesEl = document.getElementById('chatMessages');
    const msgDiv = document.createElement('div');
    msgDiv.className = 'chat-msg bot';
    msgDiv.id = 'typing-indicator';

    const avatar = document.createElement('div');
    avatar.className = 'chat-avatar';
    avatar.textContent = '🤖';

    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble';
    bubble.innerHTML = '<div class="chat-typing"><span></span><span></span><span></span></div>';

    msgDiv.appendChild(avatar);
    msgDiv.appendChild(bubble);
    messagesEl.appendChild(msgDiv);
    messagesEl.scrollTop = messagesEl.scrollHeight;
}

function removeTypingIndicator() {
    const el = document.getElementById('typing-indicator');
    if (el) el.remove();
}

function updateSuggestions(followups) {
    const sugEl = document.getElementById('chatSuggestions');
    if (!followups || followups.length === 0) {
        sugEl.innerHTML = `
            <button class="chat-suggest-btn" onclick="sendChat('How do I search on Google?')">🔍 How to search?</button>
            <button class="chat-suggest-btn" onclick="sendChat('How do I stay safe online?')">🛡️ Stay safe online</button>
            <button class="chat-suggest-btn" onclick="sendChat('What is a browser?')">🌐 What is a browser?</button>
            <button class="chat-suggest-btn" onclick="sendChat('How do I use ChatGPT?')">🤖 How to use ChatGPT?</button>
        `;
        return;
    }
    const emojis = ['💡', '🔍', '🛡️', '🤖', '🔑', '🌐'];
    sugEl.innerHTML = followups.map((q, i) =>
        `<button class="chat-suggest-btn" onclick="sendChat('${q.replace(/'/g, "\\'")}')">${emojis[i % emojis.length]} ${q}</button>`
    ).join('');
}

function sendChat(predefined) {
    const input = document.getElementById('chatInput');
    const text = predefined || input.value.trim();
    if (!text) return;

    // Add user message
    addChatMessage(text, true);
    chatHistory.push({ role: 'user', text });
    input.value = '';

    // Show typing
    addTypingIndicator();

    // Simulate thinking delay
    const delay = 600 + Math.random() * 800;
    setTimeout(() => {
        removeTypingIndicator();
        const response = findResponse(text);
        addChatMessage(response.answer);
        chatHistory.push({ role: 'bot', text: response.answer });
        updateSuggestions(response.followups);
    }, delay);
}

function scrollToChat() {
    document.getElementById('chat-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ============================================================
// USER NAME SYSTEM
// ============================================================
let userName = localStorage.getItem('aiKidsName') || '';

function saveName() {
    const input = document.getElementById('nameInput');
    const name = input.value.trim();
    if (!name) { input.style.borderColor = '#FF4444'; return; }
    userName = name;
    localStorage.setItem('aiKidsName', name);
    document.getElementById('nameModal').classList.add('hidden');
    applyUserName();
}

function applyUserName() {
    if (!userName) {
        document.getElementById('nameModal').classList.remove('hidden');
        return;
    }
    document.getElementById('nameModal').classList.add('hidden');

    // Nav badge
    const badge = document.getElementById('userBadge');
    badge.style.display = 'flex';
    document.getElementById('userNameDisplay').textContent = userName;

    // Hero greeting
    const greetings = [
        `Hey ${userName}! Learn <span class="highlight">AI</span> the <span class="highlight2">Fun Way</span>!`,
        `Welcome back, ${userName}! Time to learn <span class="highlight">AI</span>!`,
        `${userName}'s <span class="highlight">AI</span> Adventure Starts Here!`,
        `Ready, ${userName}? Let's learn <span class="highlight">AI</span>!`
    ];
    document.getElementById('heroGreeting').innerHTML = greetings[Math.floor(Math.random() * greetings.length)];

    const subs = [
        `Hi ${userName}! Discover how computers think and create. No coding needed — just fun!`,
        `Welcome ${userName}! You're about to become an AI expert. Let's go!`,
        `Great to see you, ${userName}! Ready to explore the world of AI?`
    ];
    document.getElementById('heroSub').textContent = subs[Math.floor(Math.random() * subs.length)];

    // Chat welcome
    const chatBubble = document.querySelector('#chatMessages .chat-msg.bot .chat-bubble');
    if (chatBubble) {
        chatBubble.innerHTML = `Hey <strong>${userName}</strong>! 👋 I'm <strong>AI Buddy</strong>! I can help you learn how to use the internet safely. Try asking me something!`;
    }

    // Final test sub
    document.getElementById('finalTestSub').textContent = `20 VERY hard questions for ${userName}. Can you get 80% or more?`;
}

function changeName() {
    const newName = prompt('What name do you want to use?', userName);
    if (newName && newName.trim()) {
        userName = newName.trim();
        localStorage.setItem('aiKidsName', userName);
        applyUserName();
    }
}

// ============================================================
// DARK MODE / LIGHT MODE
// ============================================================
function initTheme() {
    const saved = localStorage.getItem('aiKidsTheme');
    if (saved === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById('themeIcon').textContent = '☀️';
    }
}

function toggleTheme() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('aiKidsTheme', 'light');
        document.getElementById('themeIcon').textContent = '🌙';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('aiKidsTheme', 'dark');
        document.getElementById('themeIcon').textContent = '☀️';
    }
}

// ============================================================
// FINAL TEST - 20 VERY HARD QUESTIONS
// ============================================================
const finalTestQuestions = [
    { q: "What does 'Artificial Intelligence' literally mean?", a: "Intelligence created by humans", o: ["Intelligence created by humans", "A type of robot", "Smart computers only", "A programming language"] },
    { q: "What is the MAIN difference between AI and a regular computer program?", a: "AI learns from data, programs follow fixed rules", o: ["AI learns from data, programs follow fixed rules", "AI is always faster", "Programs can't do anything", "AI doesn't need electricity"] },
    { q: "In a neural network, what is 'backpropagation'?", a: "Adjusting connections after finding errors", o: ["Adjusting connections after finding errors", "Moving data backward in time", "Deleting old data", "A type of computer virus"] },
    { q: "Why is training data quality important for AI?", a: "Bad data creates biased or incorrect AI", o: ["Bad data creates biased or incorrect AI", "It doesn't matter at all", "More data always means better AI", "Only expensive data works"] },
    { q: "What is 'overfitting' in machine learning?", a: "AI memorizes training data but fails on new data", o: ["AI memorizes training data but fails on new data", "AI runs too slowly", "AI uses too much memory", "AI learns too little"] },
    { q: "What is 'transfer learning'?", a: "Using knowledge from one task for a new task", o: ["Using knowledge from one task for a new task", "Moving files between computers", "Downloading data faster", "Transferring money online"] },
    { q: "How does a chatbot like ChatGPT generate text?", a: "By predicting the most likely next word", o: ["By predicting the most likely next word", "By copying text from Wikipedia", "By looking up answers in a database", "By asking a human for help"] },
    { q: "What makes a neural network 'deep'?", a: "It has many layers of neurons", o: ["It has many layers of neurons", "It's hard to understand", "It processes deep ocean data", "It uses very large numbers"] },
    { q: "What is AI bias and why is it dangerous?", a: "Unfair patterns from bad data that harm certain groups", o: ["Unfair patterns from bad data that harm certain groups", "AI that runs too fast", "A type of computer error", "Bias against using AI"] },
    { q: "What does a CNN (Convolutional Neural Network) specialize in?", a: "Image and visual recognition tasks", o: ["Image and visual recognition tasks", "Text translation only", "Music composition", "Calculating math problems"] },
    { q: "In reinforcement learning, how does an agent learn?", a: "By trial and error, receiving rewards and penalties", o: ["By trial and error, receiving rewards and penalties", "By reading instruction manuals", "By copying human behavior exactly", "By watching YouTube videos"] },
    { q: "What is a GAN (Generative Adversarial Network)?", a: "Two neural networks competing to create realistic content", o: ["Two neural networks competing to create realistic content", "A type of gaming console", "A single network that generates random data", "A networking protocol"] },
    { q: "Why do AI recommendation systems (like Netflix) work?", a: "They analyze your behavior patterns and compare with similar users", o: ["They analyze your behavior patterns and compare with similar users", "A human watches what you like", "They read your diary", "They use random guessing"] },
    { q: "What is 'natural language processing' (NLP)?", a: "AI understanding and generating human language", o: ["AI understanding and generating human language", "Teaching robots to speak loud", "A type of natural science", "Processing natural foods with AI"] },
    { q: "What is a 'decision tree' in AI?", a: "A branching flowchart that makes classifications step by step", o: ["A branching flowchart that makes classifications step by step", "A real tree made of decisions", "A type of neural network with no structure", "A programming language"] },
    { q: "How do self-driving cars use AI?", a: "Combining camera, sensor, and map data to make driving decisions", o: ["Combining camera, sensor, and map data to make driving decisions", "A human driver sits inside controlling it", "They follow a pre-recorded GPS path only", "They use a remote control"] },
    { q: "What is 'computer vision'?", a: "AI that can see and understand images and video", o: ["AI that can see and understand images and video", "A new type of glasses", "A video game engine", "A camera brand"] },
    { q: "What is the biggest risk of AI privacy violations?", a: "Personal data being collected and used without consent", o: ["Personal data being collected and used without consent", "Computers overheating", "Internet being too slow", "AI becoming too smart"] },
    { q: "What is an 'adversarial attack' on AI?", a: "Deliberately crafted inputs designed to fool AI systems", o: ["Deliberately crafted inputs designed to fool AI systems", "Physical attacks on robots", "Using AI for mean comments", "Attacking a website with AI"] },
    { q: "What is 'few-shot learning'?", a: "AI learning a new task from just a few examples", o: ["AI learning a new task from just a few examples", "AI learning from millions of examples only", "Taking fewer photos", "A type of photography"] },
];

let ftIndex = 0, ftScore = 0, ftShuffled = [];

function startFinalTest() {
    ftIndex = 0;
    ftScore = 0;
    ftShuffled = [...finalTestQuestions].sort(() => Math.random() - 0.5);
    document.getElementById('finalTestStart').classList.add('hidden');
    document.getElementById('finalTestGame').classList.remove('hidden');
    renderFTQuestion();
}

function renderFTQuestion() {
    if (ftIndex >= ftShuffled.length) {
        finishFinalTest();
        return;
    }
    const q = ftShuffled[ftIndex];
    document.getElementById('ftScore').textContent = `Score: ${ftScore}/20`;
    document.getElementById('ftProgress').textContent = `Question ${ftIndex + 1} of 20`;
    document.getElementById('ftProgressBar').style.width = `${(ftIndex / 20) * 100}%`;
    document.getElementById('ftQuestion').innerHTML = `<strong>🏆 Q${ftIndex + 1}:</strong> ${q.q}`;

    const opts = [...q.o].sort(() => Math.random() - 0.5);
    document.getElementById('ftOptions').innerHTML = opts.map(o =>
        `<button class="quiz-option" onclick="answerFT(this,'${o.replace(/'/g, "\\'")}')">${o}</button>`
    ).join('');
}

function answerFT(btn, answer) {
    document.querySelectorAll('#ftOptions .quiz-option').forEach(b => b.disabled = true);
    const q = ftShuffled[ftIndex];
    if (answer === q.a) {
        btn.classList.add('correct');
        ftScore++;
    } else {
        btn.classList.add('wrong');
        document.querySelectorAll('#ftOptions .quiz-option').forEach(b => {
            if (b.textContent === q.a) b.classList.add('correct');
        });
    }
    ftIndex++;
    setTimeout(renderFTQuestion, 1000);
}

function finishFinalTest() {
    const pct = Math.round((ftScore / 20) * 100);
    const passed = pct >= 80;
    const name = userName || 'Explorer';

    let emoji, title, msg;
    if (pct === 100) {
        emoji = '👑'; title = 'PERFECT SCORE!'; msg = `${name}, you are an absolute AI GENIUS! 20/20! Incredible!`;
    } else if (passed) {
        emoji = '🏆'; title = 'PASSED!'; msg = `Amazing work, ${name}! You scored ${ftScore}/20 (${pct}%). You truly understand AI!`;
    } else if (pct >= 60) {
        emoji = '💪'; title = 'Almost There!'; msg = `Good try ${name}! You got ${ftScore}/20 (${pct}%). You need 80% to pass. Review the lessons and try again!`;
    } else {
        emoji = '📚'; title = 'Keep Learning!'; msg = `${name}, you scored ${ftScore}/20 (${pct}%). Don't give up! Review the lessons and come back stronger!`;
    }

    document.getElementById('finalTestGame').classList.add('hidden');
    document.getElementById('finalTestStart').classList.remove('hidden');
    document.getElementById('finalTestStart').innerHTML = `
        <div class="final-test-trophy">${emoji}</div>
        <h3>${title}</h3>
        <p>${msg}</p>
        <div style="margin:20px 0;">
            <div style="font-size:48px;font-family:'Fredoka',sans-serif;color:var(--orange);">${ftScore}/20</div>
            <div style="font-size:18px;color:var(--text-med);font-weight:700;">${pct}%</div>
        </div>
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
            <button class="btn btn-warm btn-large" onclick="startFinalTest()">Try Again 🔄</button>
            <a href="#lessons" class="btn btn-outline-warm btn-large">Review Lessons 📚</a>
        </div>
    `;
}

// ============================================================
// Init
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    setupTabs();
    setupMobileNav();
    setupBackToTop();
    setupSmoothScroll();
    setupModalClose();

    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);

    // User badge click to change name
    document.getElementById('userBadge').addEventListener('click', changeName);

    // Name entry
    applyUserName();
});
