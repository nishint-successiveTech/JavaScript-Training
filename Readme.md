# 🔬 Atomic Design by Brad Frost

![Atomic Design Diagram](https://miro.medium.com/v2/resize:fit:1400/1*U-jFHRJxePDHHBWtd19M8g.png)

**Atomic Design** is a methodology for creating design systems by breaking down user interfaces into five hierarchical stages:

1. **Atoms**: Basic elements like buttons, inputs, and labels.
2. **Molecules**: Groups of atoms functioning together, e.g., a form field.
3. **Organisms**: Complex components made of molecules and atoms, e.g., a navigation bar.
4. **Templates**: Page structures with placeholder content.
5. **Pages**: Final layouts with real content, showcasing the design.          


# 12-Factor App Methodology

![12-Factor App](https://media.licdn.com/dms/image/v2/C5612AQFZiICWgTh2ig/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1609225402751?e=2147483647&v=beta&t=6_5_6R2ISpW4S4H58O7xoK9Dr6gd8Rp1kPyGpB9dPYU)

The **12-Factor App** is a set of best practices for building modern, scalable, and maintainable web applications. Originally developed by Heroku, these principles help developers create applications that are portable, resilient, and easy to deploy across cloud environments.

---

## The 12 Factors

1. **Codebase**  
   One codebase tracked in version control, many deploys.  
   _One app corresponds to one codebase with multiple deployments._

2. **Dependencies**  
   Explicitly declare and isolate dependencies.  
   _Avoid implicit system-wide dependencies by using dependency managers._

3. **Config**  
   Store configuration in the environment.  
   _Keep config separate from code, typically in environment variables._

4. **Backing Services**  
   Treat backing services as attached resources.  
   _Databases, queues, caches should be replaceable without code changes._

5. **Build, Release, Run**  
   Strictly separate build, release, and run stages.  
   _Build app, combine with config, then run._

6. **Processes**  
   Execute the app as one or more stateless processes.  
   _Processes do not store state; state is persisted in backing services._

7. **Port Binding**  
   Export services via port binding.  
   _The app is self-contained and listens on a port for requests._

8. **Concurrency**  
   Scale out via the process model.  
   _Run multiple processes to handle increased load._

9. **Disposability**  
   Fast startup and graceful shutdown.  
   _Processes should start and stop quickly and cleanly._

10. **Dev/Prod Parity**  
    Keep development, staging, and production environments as similar as possible.  
    _Minimize bugs by aligning environments._

11. **Logs**  
    Treat logs as event streams.  
    _Write logs to stdout/stderr for centralized processing._

12. **Admin Processes**  
    Run admin or management tasks as one-off processes.  
    _Database migrations or maintenance scripts run separately._

