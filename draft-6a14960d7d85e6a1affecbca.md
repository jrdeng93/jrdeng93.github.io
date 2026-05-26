---
title: "From Stack Overflow to Agentic Engineering: My Journey with AI Coding
"
cover: https://cdn.hashnode.com/uploads/covers/6a14918d7d85e6a1affcf755/3ce1099a-c98d-4dfb-b505-62c348eda182.png

---

---

## TL;DR

My AI coding journey went through five stages:

| Year        | AI felt like                       | My role changed to           |
| ----------- | ---------------------------------- | ---------------------------- |
| 2022 Winter | Better Stack Overflow              | Enhanced Engineer            |
| 2023 Summer | IDE-native coding assistant        | Rapid iterator + integrator  |
| 2023-2024   | Research productivity partner      | Researcher + system designer |
| 2024-2025   | Large project developer and co-debugger                        | Architect + reviewer         |
| 2025-2026   | Excellent engineer / DS / PM / MLE | Tech lead + orchestrator     |
| Future      | Team of partners                   | Vision + roadmap owner       |

The biggest change is not simply that AI writes more code.

It is that the role of engineers is shifting from **implementation-first** to **orchestration-first**.

> **Main idea:** As implementation becomes cheaper, engineering judgment becomes more valuable.

---

## 2022 Winter: A Better Stack Overflow

When ChatGPT first appeared in late 2022, my first reaction was simple:

> “This is a much better Stack Overflow.”

For common coding questions, it was amazing.

Instead of opening five browser tabs, reading Stack Overflow comments, comparing answers, and adapting snippets manually, I could ask a question directly and get an explanation with code.

> **Real shift:** For high-frequency coding problems, one conversation started to replace multiple search tabs.

But the limitation was also clear.

For rare bugs, system-specific issues, or messy edge cases, the answer could still be confidently wrong.

So at that stage, AI was not yet my engineering partner. It was a better interface to existing knowledge.

What changed was not that every answer became correct.

What changed was the speed of the first draft: the first explanation, the first snippet, the first direction to try.

That alone changed how I searched, verified, and learned.

---

## 2023 Summer: The IDE Became the New Coding Interface

In the summer of 2023, I joined Microsoft as an intern.

At that time, the Copilot brand was still mostly associated with GitHub Copilot. The consumer-facing Copilot experience was still called Bing Chat.

But inside the IDE, GitHub Copilot already felt like a real workflow shift.

Before that, my coding loop looked like this:

```text
Error → Search → Read threads → Copy snippet → Adapt → Run → Debug
```

With Copilot in the IDE, the loop became much shorter:

```text
Intent → Suggestion → Review → Run → Debug → Iterate
```

> **Real shift:** That summer, I basically stopped opening Stack Overflow.

Not because Stack Overflow became useless, but because my default coding interface had moved from the browser to the IDE.

The important part was not that Copilot always gave perfect code. It did not. The context window was still limited, and it often failed once the problem went beyond the visible file.

The important part was that the interaction loop changed.

I was no longer leaving the development environment to search for answers. I was validating, editing, and integrating AI suggestions directly inside the IDE.

That was the first time AI coding felt less like “searching for code” and more like “building with feedback.”

---

## 2023-2024: AI Became Part of My Research Stack

After that internship, I went back to school to continue my PhD.

That was when I realized I could no longer work without AI coding tools.

Luckily, GitHub Copilot was available for students through education accounts. Honestly, that felt like renewing my developer life subscription.

> **Real shift:** AI became part of almost half of my research workflow, not only for coding, but also for writing, debugging, refactoring, and preparing experiments.

The value was not that AI could replace research thinking. It could not decide the problem, design the core method, or interpret whether a result was meaningful.

The value was that it reduced the friction between ideas and experiments.

In research, that friction matters. A lot of progress is blocked by small but time-consuming tasks: debugging experiment scripts, refactoring code, fixing LaTeX, cleaning result tables, preparing figures, or packaging code for the next run.

AI made those tasks lighter.

It changed my workflow from simply “doing research” to building a faster research system around myself: idea, prototype, experiment, analysis, writing, and iteration.

> **Why it mattered:** I was still driving the research direction, but AI helped me move faster from idea to prototype, from prototype to experiment, and from experiment to paper.

AI became a research productivity partner.

---

## 2024-2025: From Writing Code to Co-Debugging Systems

One year later, I returned to Microsoft AI as a full-time engineer.

By then, Copilot had improved a lot: longer context, better project awareness, and stronger code generation.

My workflow changed again.

I started giving most basic implementation work to AI.

> **Real shift:** In many cases, **more than 70% of the code could be generated by AI**. My work moved from writing every line to designing the structure, reviewing the output, and debugging the system.

But engineering did not disappear.

It moved one level higher.

Instead of starting from code, I started from architecture:

```text
Read docs
→ compare approaches
→ decide architecture
→ define data interfaces
→ write design notes
→ ask Copilot to implement
→ review code
→ co-debug issues
```

This was the first time I clearly felt the difference between “AI writes code” and “AI helps build systems.”

The generated code was useful, but it was not automatically correct. It missed edge cases. It misunderstood system constraints. It created integration bugs.

So my work became less about typing every line and more about reviewing, testing, and co-debugging.

The team impact was the most convincing part.

> **Real example:** As one of the main owners for feature integration and demos, I saw our demo cycle become much shorter. In a few weeks, we moved from collecting sensor data to simulate scenarios to building a lightweight web app for real-world testing.

Teammates tested features across multiple U.S. cities, while I monitored the backend in real time.

During one test, I even used AI to help fix a bug while testing was still ongoing, so the experiment could continue.

That real-time moment changed how I thought about AI coding:

> AI was not only accelerating individual developers. It was compressing the iteration cycle of an entire team.

At this stage, AI felt less like a code generator and more like a co-debugger.

My role became closer to an architect and reviewer: define the structure, set the interfaces, review the generated implementation, and debug the gap between code and reality.

---

## 2025-2026: AI Became a Team of Strong Partners

After about a year at Microsoft, I transferred to a new team in Azure Core.

New team. New stack. New domain.

There were many internal docs, engineering rules, deployment requirements, and domain-specific systems to learn. The onboarding pressure was real.

But Copilot had evolved again: longer context, better context compression, and agent mode.

At the same time, the enterprise AI environment had also changed.

Many companies were starting to build internal AI experiences that could work with private code, internal documents, and domain-specific context while still addressing privacy and data security concerns. That changed the game. We no longer needed to train a fully domain-specific model from scratch for every internal system. Instead, we could use strong flagship AI models with the right internal context, permissions, and guardrails.

> **Real shift:** AI could finally work closer to where real engineering knowledge lives: private codebases, internal docs, deployment rules, and team-specific workflows.

This was the first time AI felt less like autocomplete and more like a team of strong partners sitting next to me: an excellent software engineer, data scientist, product manager, and ML engineer.

At this stage, I was barely writing code myself.

My role became closer to a tech lead: defining the problem, setting constraints, reviewing designs, checking errors, comparing trade-offs, and coordinating AI across engineering, data, product, and ML perspectives.

One example stood out.

In a previous team, I needed dedicated help from a teammate to set up deployment changes related to SFI, the [Secure Future Initiative](https://www.microsoft.com/en-us/trust-center/security/secure-future-initiative). It was not just a coding task. It required understanding security requirements, deployment policy, service constraints, and the right metrics to satisfy.

In the new team, I tried a different workflow.

> **Real example:** I asked AI to read the relevant documentation, understand the required metrics, compare them with our current deployment strategy, and suggest changes. After several iterations, we successfully deployed the service and met the requirements.

That example mattered to me because it was not about generating a function or fixing a syntax error.

> **Why it mattered:** With access to internal context, AI helped close a domain-knowledge gap, reason through engineering constraints, and drive a real deployment to completion.

My questions had evolved from:

> “Help me write code to process X.”

To:

> “How should we implement X? What are the options? Compare the trade-offs. Pick an approach. Implement it. Run tests. Debug the failure.”

That is not just a better coding assistant.

That is a different role for the engineer.

Less like an individual contributor typing every line.

More like a tech lead guiding a small team of very capable AI partners.

---

## Main Takeaway: From Coder to Orchestrator

I once shared my “vibe coding” experience in a team meeting.

My view is simple:

> **The next “full-stack engineer” may not be someone who personally writes every layer of the stack, but someone who can lead a team of AI partners across the stack.**

The role of engineers has already changed several times.

```text
20 years ago: Frontend / Backend / Database / Infrastructure engineers
10 years ago: Full-stack engineers
AI era: Engineers as tech leads of AI partners
```

In the AI era, “full-stack” may change again.

The new full-stack could look like:

> **Software Engineer + ML Engineer + Data Scientist + Product Manager + Tech Lead**

Not because everyone suddenly becomes an expert in every domain.

But because AI partners make it possible for one person to coordinate across more layers of the product and engineering lifecycle: engineering, data science, machine learning, product thinking, deployment, monitoring, and feedback loops.

> **Main takeaway:** The role shift is from writing code as the main output to leading the process that turns ideas into working systems.
