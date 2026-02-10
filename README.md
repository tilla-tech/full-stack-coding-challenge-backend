# Backend Coding Challenge

Our main goal for this exercise is to get an idea of how you are to work with and how you approach your engineering work. That insight is more important than your actual working solution at the end of this exercise.

Please record your screen and talk us through the coding exercise as you work through it. Don't hesitate to think out loud—that's the interesting part!

We expect this to take around an hour.

## Brief

You'll be building an endpoint to look up airport information. In its current state, we render a list of all airports (around 6000) on the frontend, but we don't want to keep this data in the frontend or load them all at once.

## What we'd like you to do:

### Task 1: Airport Endpoint

- **Fix the Bug**: There is a Seaports resolver added to the backend, but in some edge-cases when searching for specific ports by specifying their IDs (e.g., 1, 2, 3), it throws an error and is unable to resolve anything. Investigate the issue and add a hotfix.
- **Optimize airports data**: Please move this data into a database scheme on the backend.
- **Add an endpoint**: Write an endpoint that allows fetching data from the frontend. Your endpoint should allow user to look up airports by searching for airports by name, IATA, city, or country.

The designer gave you this mock-up as a reference. It's fine if the design doesn't look like this, since this exercise focuses on the back-end, but it gives you an idea of where this would go.

![image](https://user-images.githubusercontent.com/144075/144594282-68de44cd-bef2-4d9d-8c5d-398862cbc964.png)

### Task 2: Seaport Integrator

One of our clients has noticed that our seaport data is incomplete. An intern at their IT department has kindly made their seaport data available for us.
Please review the email thread forwarded to you by the product team:

> From: product@tilla
>
> Good day,
>
> Can you please take a look at the seaport data and see if we can use it to update our seaport data?
> Ideally, we want our seaport data to be kept in sync with what the client provides us.
>
> We anticipate that other clients might also provide us with seaport data in the future.
>
> The more data we have, the better!
>
> Cheers,
> Tilla Product Team
>
> > From: mike@shippingcompany
> >
> > Hi Tilla Team!
> >
> > I setup that connector you asked for to our seaports table.
> > The connector will automatically dump our seaport data to an xl file and upload it to  
> > an Azure Blob Storage. The automation runs ~2 times per day.
> >
> > You'll need a token to connect, which we'll send to you in a separate email.
> >
> > Best regards,  
> > Mike the intern.  
> > Fracking Fast Freight Logistics

Take ownership of this task as given to you by the product team.

## Assumptions

- Tilla uses [NestJS](https://nestjs.com), [Prisma](https://www.prisma.io) with PostgreSQL and TypeScript. It'd be cool if you use that same tech stack for this exercise.
- The database is currently a JSON file with airport data.
- The IATA code is a unique identifier for an airport.
- While we care more about your thought process than your outcome, we're still interested in how you write code. Don't cut corners there, and write the code as if you'd write a real-world, production-quality product.

## Extra questions

We'd love to hear your thoughts on some of these questions. Please don't spend more than a minute or two on each question.

- What are some edge cases you would take care of before shipping this to production?
- How would you scale this to handle high amounts of traffic?
- What's important for you to work well in a fully remote team?

## Deliverables

- Invite [@umartayyab](https://github.com/umartayyab), [@Calvin-Tilla](https://github.com/Calvin-Tilla), [@akshatamohanty](https://github.com/akshatamohanty), and [@AleSua93](https://github.com/AleSua93) to a GitHub repo with your completed project
- A video of your screen recording (unlisted YouTube video, Loom, … anything works)
- Answers to the questions above can be either in the video or written down in the README of your repo

## Getting Started

The app is designed to work out of the box.

```shell
yarn install
yarn start
```

The app should be available via [http://localhost:3000](http://localhost:3000).

Good luck and talk soon!
