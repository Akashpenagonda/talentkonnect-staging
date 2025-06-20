const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('.'));

app.use('/onboarding', express.static(path.join(__dirname, 'modules/onboarding')));
app.use('/wallet', express.static(path.join(__dirname, 'modules/wallet')));
app.use('/post-gig', express.static(path.join(__dirname, 'modules/post-gig')));
app.use('/complete-gig', express.static(path.join(__dirname, 'modules/complete-gig')));
app.use('/feed', express.static(path.join(__dirname, 'modules/feed')));
app.use('/referral', express.static(path.join(__dirname, 'modules/referral')));
app.use('/credit-conversion', express.static(path.join(__dirname, 'modules/credit-conversion')));
app.use('/notifications', express.static(path.join(__dirname, 'modules/notifications')));
app.use('/clustering', express.static(path.join(__dirname, 'modules/clustering')));
app.use('/analytics', express.static(path.join(__dirname, 'modules/analytics')));

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>TalentKonnect - All Modules</title></head>
      <body style="font-family: Arial; padding: 20px;">
        <h1>TalentKonnect - Unified Modules</h1>
        <ul>
          <li><a href="/onboarding">Module 1: Onboarding & Skill Declaration</a></li>
          <li><a href="/wallet">Module 2: Credit Wallet & Ledger API</a></li>
          <li><a href="/post-gig">Module 3: Micro-Task Posting</a></li>
          <li><a href="/complete-gig">Module 4: Micro-Task Matching & Completion</a></li>
          <li><a href="/feed">Module 5: Feed & Discovery</a></li>
          <li><a href="/referral">Module 6: Referral Widget</a></li>
          <li><a href="/credit-conversion">Module 7: Credit-to-Token Conversion</a></li>
          <li><a href="/notifications">Module 8: Notifications & Reminders</a></li>
          <li><a href="/clustering">Module 9: Admin Clustering Dashboard</a></li>
          <li><a href="/analytics">Module 10: Analytics & Reporting</a></li>
        </ul>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});