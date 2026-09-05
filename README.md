# my_first_app

## 1. `rvm` setup
```shell
$ source /home/ryan/.rvm/scripts/rvm
$ rvm list known
$ rvm get stable

$ source /home/ryan/.rvm/scripts/rvm
$ rvm install 3.2.0
$ rvm gemset create my_project_gems
$ rvm use 3.2.0@my_project_gems
$ rvm gemset list

$ gem install rails
$ rails -v

$ rails new my_first_app
$ cd my_first_app/
$ vi .rvmrc
$ rails server -p 4000
```

## 2. Add reactjs
```shell
$ bundle add react_on_rails --strict
$ bin/rails generate react_on_rails:install

╔════════════════════════════════════════════════════════════════════════╗
║  🎉 React on Rails Successfully Installed!                             ║
╚════════════════════════════════════════════════════════════════════════╝

⚠️  No process manager detected. Install one:
brew install overmind  # Recommended (easier debugging)
gem install foreman   # Alternative

📦 SHAKAPACKER SETUP:
─────────────────────────────────────────────────────────────────────────
✓ Added to Gemfile automatically
✓ Installer ran successfully
✓ Webpack integration configured

📋 QUICK START:
─────────────────────────────────────────────────────────────────────────
1. Install dependencies:
   bundle && npm install

2. Prepare database:
   bin/rails db:prepare

3. Start the app:
   ./bin/dev              # HMR (Hot Module Replacement) mode
   ./bin/dev static       # Static bundles (no HMR, faster initial load)
   ./bin/dev prod         # Production-like mode for testing
   ./bin/dev help         # See all available options

4. Visit: http://localhost:3000/hello_world
✨ KEY FEATURES:
─────────────────────────────────────────────────────────────────────────
• Auto-registration enabled - Your layout only needs:
  <%= javascript_pack_tag %>
  <%= stylesheet_pack_tag %>

• Server-side rendering - Enabled with prerender option in app/views/hello_world/index.html.erb:
  <%= react_component("HelloWorld", props: @hello_world_props, prerender: true) %>

📚 LEARN MORE:
─────────────────────────────────────────────────────────────────────────
• Documentation: https://reactonrails.com/docs/
• Webpack customization: https://github.com/shakacode/shakapacker#webpack-configuration

💡 TIP: Run 'bin/dev help' for development server options and troubleshooting

🧪 TESTING SETUP (Optional):
─────────────────────────────────────────────────────────────────────────
For JavaScript testing with asset compilation, add this to your RSpec config:

# In spec/rails_helper.rb or spec/spec_helper.rb:
ReactOnRails::TestHelper.configure_rspec_to_compile_assets(config)


    💎 For RSC, streaming SSR, and 10-100x faster SSR, try React on Rails Pro:
       https://reactonrails.com/docs/pro/upgrading-to-pro/


$  bin/dev
🔧 Running Shakapacker precompile hook...
   Command: bin/shakapacker-precompile-hook

✅ Precompile hook completed successfully


Checking database setup...
   Database is accessible
Default ports in use. Using Rails :3002, webpack :3035

┌──────────────────────────────────────────────────────────┐
│                                                          │
│ 📋 Using Procfile: Procfile.dev                          │
│ 🔧 Customize this file for your app's needs              │
│                                                          │
│ 💡 Access at: http://localhost:3002/hello_world          │
│                                                          │
└──────────────────────────────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ERROR: Process Manager Not Found
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To run the React on Rails development server, you need either 'overmind' or
'foreman' installed on your system.

RECOMMENDED INSTALLATION:

  macOS:    brew install overmind
  Linux:    gem install foreman

IMPORTANT:
DO NOT add foreman to your Gemfile. Install it globally on your system.

For more information about why foreman should not be in your Gemfile, see:
https://github.com/ddollar/foreman/wiki/Don't-Bundle-Foreman

After installation, try running this script again.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


$ gem install foreman
```


Stopping `bin/dev` in a Rails project is simple — it’s just a Foreman‑style process runner. Here’s exactly how to shut it down cleanly.

---


## ✅ **How to stop `bin/dev`**
`bin/dev` runs in your terminal as a foreground process.  
To stop it:

### **Press `Ctrl + C` in the terminal where it’s running.**

That sends an interrupt signal and shuts down:

- Rails server  
- JS bundler (Webpack, Rspack, Vite, etc.)  
- Any other processes defined in `Procfile.dev`  

---

## 3. 🧹 If `bin/dev` doesn’t stop cleanly
Sometimes a bundler process keeps running in the background. You can kill it manually:

### **Mac/Linux**
```bash
pkill -f bin/dev
pkill -f rails
pkill -f webpack
pkill -f rspack
```

### **Or find the process first**
```bash
ps aux | grep dev
kill -9 <PID>
```

---

## 🔄 If you started `bin/dev` in VS Code terminal
Just close that terminal tab — it sends the same interrupt signal.

---

## 🧠 Quick tip
If you ever want to restart everything fresh:

```bash
bin/dev
```

Rails will spin up all processes again.

---

If you want, I can also show you how to customize `Procfile.dev` or switch your Rails app to Vite for faster frontend builds.

## 4. References
[react_on_rails tutorial](https://reactonrails.com/docs/getting-started/tutorial/)


This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
