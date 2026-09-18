import { DocumentCentered } from '@/components/sections/document-centered';

export default function CookiePolicyPage() {
  return (
    <DocumentCentered
      id="document"
      headline="Cookie Policy"
      subheadline={<p>Last updated on September 18, 2026</p>}
    >
      <p>
        This website does not use tracking cookies. We do not run advertising
        cookies, we do not profile visitors, and we do not share visitor data
        with advertising networks. Because nothing on this site requires your
        consent to be stored on your device, there is no consent banner to
        accept or reject.
      </p>
      <h2>Visitor statistics</h2>
      <p>
        We measure how the site is used with Simple Analytics, a Dutch provider
        that stores its data on servers inside the European Union. Simple
        Analytics sets no cookies and stores no personal data. It records page
        views, referrers, approximate country, and the type of device and
        browser, all in aggregate. Nothing it collects can be traced back to an
        individual visitor, and nothing follows you across other websites.
      </p>
      <p>
        Simple Analytics acts as our processor for this data. Its privacy policy
        and data processing terms are published at{' '}
        <a href="https://www.simpleanalytics.com/privacy-policy">
          simpleanalytics.com/privacy-policy
        </a>
        .
      </p>
      <h2>What we do store on your device</h2>
      <ul>
        <li>
          A single entry in your browser's local storage that records you have
          seen the notice at the bottom of this site, so it is not shown again
          on every page. It contains no personal data and is only written when
          you dismiss the notice.
        </li>
        <li>
          Strictly necessary storage set by our hosting provider to keep the
          site available and to protect it against abuse. This is used only for
          security and delivery, never for analysis or advertising.
        </li>
      </ul>
      <p>
        You can clear this storage at any time through your browser settings.
        Blocking it has no effect on the site beyond the notice reappearing.
      </p>
      <h2>Third parties</h2>
      <p>
        Apart from the visitor statistics described above, this site makes no
        requests to third-party servers. Fonts, images and every other asset are
        served from decaltra.com itself, so no other company sees your IP
        address because you opened a page here.
      </p>
      <p>
        When you send us a message through one of the forms on this site, your
        details go to our own mail infrastructure and are used only to answer
        you. That is covered in our <a href="/privacy-policy">privacy policy</a>
        .
      </p>
      <h2>Changes</h2>
      <p>
        If we ever add a tool that does write cookies to your device, we will
        place a consent banner before it loads and update this page first.
        Questions about anything on this page can be addressed to{' '}
        <a href="mailto:info@DecAltra.com">info@DecAltra.com</a>.
      </p>
      <p>© 2026 DecAltra. All Rights reserved.</p>
    </DocumentCentered>
  );
}
