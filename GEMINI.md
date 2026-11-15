# BR Bhatta Website (`brbhatta.com`) - Agent Rules

You are working on the Next.js static-export website (`output: 'export'` -> `out/`) deployed on Cloudflare Pages (`https://www.brbhatta.com`, GitHub `brbhatt-dev/brbsolution`).

## Mandatory Rule: Sync All BR Patro Surfaces on Every App Update

Source app repo lives at `C:\Users\BOSS\Desktop\BR_Patro_Project\1_Main_App`. Whenever BR Patro releases a new version/APK (or when asked to sync/check Patro updates on the website), **all** of the following MUST be updated together in full — never leave partial version bumps or stale feature cards:

1. **`src/app/patro/page.tsx`:**
   - SEO `metadata.description` & `openGraph.images[0].alt` (`vX.X.XX`)
   - `downloadUrl`, `releasePageUrl`, `Version X.X.XX`, `Build XXX`, APK size (`📦 ... MB (लाइटवेट)`), `अपडेट मिति`
   - Top item in `RELEASE_LOGS` (`isLatest: true` and `tag` on the newest release only)
   - **Section 3 `WHATS_NEW_VERSION` AND all 4 cards in `WHATS_NEW_FEATURES` (`✨ नयाँ भर्सन (vX.X.XX) का प्रमुख विशेषताहरू`)**: always update the 4 feature card titles & descriptions to match the new version's actual changes (never bump the heading version alone)
   - Bottom APK install step 2 filename & direct download label

2. **`src/components/InteractiveOnlinePatro.tsx`:**
   - `downloadApkUrl` (`BR_Patro_vX.X.XX.apk`)

3. **`src/components/PatroAppPromoBanner.tsx`:**
   - Both `floating` and `inline` banners: version text (`vX.X.XX`), APK size (`MB`), and GitHub APK `href`

4. **`src/data/articles.ts`:**
   - `आधिकारिक APK (vX.X.XX)` and any BR Patro APK links

5. **`public/api/patro-broadcast.json`:**
   - `id`, `version`, `build`, `title`, `message`, `date`, and `highlights` (4 items)

6. **Sibling Mirror (`C:\Users\BOSS\Desktop\binodbhatt.com.np\patro\index.html`):**
   - Keep version, links, metadata, and its 4 `"नयाँ भर्सन (v...) का प्रमुख विशेषताहरू"` cards synced too, then deploy `binodbhatt-portal`.

7. **Mandatory Verification & Deployment:**
   - Run `npx tsc --noEmit` and `npm run build`
   - Deploy to Cloudflare Pages (`.\deploy.ps1` / `.\deploy_pages.ps1`)
   - Commit and push to `origin/main`
   - Verify live `https://www.brbhatta.com/patro` reflects the new version, download link, `RELEASE_LOGS`, and updated 4 feature cards.
