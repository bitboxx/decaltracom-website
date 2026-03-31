import { DocumentCentered } from '@/components/sections/document-centered'

export default function CookiePolicyPage() {
  return (
    <DocumentCentered id="document" headline="Cookie Policy" subheadline={<p>Last updated on March 27, 2026.</p>}>
      <p>
        Our websites and direct emails use cookies to distinguish you from other users of our content. This helps us
        provide you with a better browsing experience and improves our sites.
      </p>
      <p>
        Non-essential cookies (including analytical, functionality and targeting cookies) are only placed after you
        have provided your explicit consent via the cookie banner. You can manage or withdraw your consent at any time
        via your cookie settings.
      </p>
      <p>
        A cookie is a small file of letters and numbers that we store on your browser or the hard drive of your computer
        if you agree. Cookies contain information that is transferred to your computer's hard drive.
      </p>
      <p>
        Cookie Expiration: All cookies are set to expire after one year from the first day of acceptance. We
        periodically review our cookie expiration date, and any changes will be reflected in this privacy policy.
      </p>
      <h2>We use the following types of cookies:</h2>
      <ul>
        <li>
          Strictly necessary cookies: These cookies are processed on the basis of our legitimate interest in ensuring
          the proper functioning of the Website.
        </li>
        <li>
          Analytical cookies: These cookies allow us to recognize and count the number of visitors and see how visitors
          move around our website when they are using it. This helps us to improve the way our website works, for example,
          by ensuring that users find what they are looking for easily.
        </li>
        <li>
          Functionality cookies: These are used to recognize you when you return to our website. This enables us to
          personalize our content for you, greet you by name, and remember your preferences (for example, your choice of
          language or region).
        </li>
        <li>
          Targeting cookies: These cookies record your visit to our website, the pages you have visited, and the links
          you have followed. We will use this information to make our website and the advertising displayed on it more
          relevant to your interests. We may also share this information with third parties for this purpose.
        </li>
      </ul>
      <p>
        Cookies will be placed on your device and used for the specific purposes described in our Cookie Disclosure. If
        you would like more information about the individual cookies we use and the purposes for which we use them,
        please contact us at <a href="mailto:info@decaltra.com" className="underline" style={{ fontVariant: 'small-caps' }}>
          info@decaltra.com
        </a>.
      </p>
      <p>
        You can block cookies by activating the setting on your browser that allows you to refuse the setting of all or
        some cookies. However, if you use your browser settings to block all cookies (including strictly necessary
        cookies), you may not be able to access all or parts of our site.
      </p>
      <p>
        Please note that third parties, including advertising networks and providers of external services like web
        traffic analysis services, may also use cookies over which we have no control. These cookies are likely to be
        analytical cookies or targeting cookies.
      </p>
      <p>© 2026 DecAltra. All Rights reserved.</p>
    </DocumentCentered>
  )
}
