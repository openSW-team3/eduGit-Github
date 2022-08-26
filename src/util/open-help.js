import { html, render } from "../../web_modules/lit-html.js";
import { APP_VERSION } from "./../config.js";
import "../atoms/button.js";

/**
 * Opens the dialog dialog.
 * @returns {Promise<void>}
 */
export async function openHelp() {
  const { openDialog } = await import("../../web_modules/web-dialog.js");
  const { $dialog, resolver } = openDialog({
    $content: ($dialog) =>
      render(
        html`
          <style>
            * {
              box-sizing: border-box;
            }

            h2 {
              margin: var(--spacing-xl) 0 var(--spacing-m);
            }

            h3 {
              margin: var(--spacing-m) 0 var(--spacing-s);
            }

            p {
              margin: 0 0 var(--spacing-m);
            }

            a {
              color: var(--link);
            }

            #close {
              position: absolute;
              top: 0;
              right: 0;
              padding: var(--spacing-l);
              cursor: pointer;
              font-size: 1.5rem;
            }

            #version {
              position: absolute;
              right: var(--spacing-m);
              bottom: var(--spacing-m);
              color: var(--shade-500);
            }
          </style>

          <div tabindex="0"></div>
          <ws-button
            id="close"
            @click="${() => $dialog.close()}"
            aria-label="Close dialog"
            >✖️</ws-button
          >

          <h2>Git Skills FAQ</h2>

          <h3>What is Git Skills?</h3>
          <p>
            Git Skills is a visual overview of useful skills to learn as a
            developer. It is useful for people who just started learning about
            Git commands. As a beginner, I would encourage you to see this
            website as an example of what you can learn and where you can start.
            The skills are arranged in chronological order based on what
            learning path I recommend you to take but feel free to jump around
            freely.
          </p>

          <h3>How did you choose the skills?</h3>
          <p>We have selected the most basic Git commands.</p>

          <h3>How can I get involved?</h3>
          <p>
            You are welcome to get involved in any way you like. If you want to,
            you can go to the [issues
            page](https://github.com/openSW-team3/eduGit-Github/issues) and help
            us fix the spelling, fix issues or suggest some new features. Any
            involvement is highly appreciated!
          </p>

          <h3>How can I keep track of what skills I know?</h3>
          <p>
            If you scroll to the bottom of the page, you will find a button that
            says "Sign in with Google". If you click this button and sign in,
            you will be able to mark skills as completed.
          </p>

          <h3>Why are there no other Git commands?</h3>
          <p>
            Since only basic commands are included, new commands will be added
            in future maintenance.
          </p>

          <h3>How can I get in contact with you?</h3>
          <p>
            Please look up the people of the organization on the corresponding
            GitHub homepage.
          </p>

          <span id="version">v${APP_VERSION}</span>
        `,
        $dialog
      ),
  });

  // Flip the colors
  $dialog.style.setProperty(`--dialog-bg`, `var(--foreground)`);
  $dialog.style.setProperty(`--dialog-color`, `var(--background)`);

  return resolver;
}
