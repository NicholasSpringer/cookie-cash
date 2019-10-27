# 🍪Cookie Cash 

[![Hackathon](https://img.shields.io/badge/Hackathon-YHack-orange)](https://www.yhack.org/) 
[![Status](https://img.shields.io/badge/status-not%20maintained-red)]() 
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md) 
  
[![Warning](https://img.shields.io/badge/prepare%20to%20see-hackathon%20spaghetti%20code-yellow)]()
  
![CookieCash logo](/github_media/Banner.png)

## Inspiration

For most kids, there are things that are good for them that they wouldn't do on their own -- i.e. taking a shower, eating veggies, doing homework. We wanted to make a system that helps parents motivate kids to be healthy and responsible, while also teaching them basic financial literacy and some important life lessons.

## What it does

Parents can set "Jobs" for their kids to complete (e.g. "Do something nice for your brother", "Wash the car", etc.) and set CookieCash rewards as well. The kids save up CookieCash and can shop at a Store, where the parents define prizes (e.g. "Ice Cream Sundae: 10 CookieCash", "Movies: 50 CookieCash", etc.), thus teaching them the value of saving, and that you can't have your cake and eat it too. They can also invest their CookieCash in "Bonds" to learn about long-term planning, and they can send/receive CookieCash with their siblings to practice accountability and lending.

## How we built it

We built the frontend with React and the backend with Flask and GCP Datastore.

## Challenges we ran into

Time constraints, new frameworks, life (we came nowhere close to finishing lol)

## What's next for CookieCash
Maybe we'll actually make a thing out of this, we dunno.
But in the meantime lemme tell you what this was meant to be:

CookieCash was meant to have two different experiences – one for the parent and one for the children (who will each have their account created by their parent).

The parent would be able to create jobs for the children to do, and set up a shop that contains prizes or favours the kids can but when they complete enough jobs. The parent can also set limits to how many bonds the kids can buy and how much money they can send and receive to and from siblings.

Children will be able to see available jobs, complete them (though when they claim that they’re completed they’re actually just changed to pending and the parents will have to confirm their completeness for the children to earn their CookieCash for that job), buy bonds (and see all the bonds that are yet to be re-claimable), transfer funds to their siblings, but things from their parent’s shop and see all their account’s activity history.


## How to Run the Thing
Open your terminal!
If you want to see the landing page (which is broken now for some reason :/), from the repo's main directory, run `python3 webapp.py`. This probably won't work though becuase you'll need GCP keys and stuff.

If you want to see the React portion of the app, then `cd` into the `public/client` folder and run `npm start`

## Screenshots
### Landing Page
![Landing Page](/github_media/landing.png)

### React Pages (only only of em)
![jobs](/github_media/jobs.png)
![bonds](/github_media/bonds.png)

### Random Thing
