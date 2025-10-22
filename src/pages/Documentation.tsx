import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Home, Download } from "lucide-react";

const Documentation = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header minimal />
      <main className="container px-4 py-16 space-y-16">
        <section className="text-center max-w-4xl mx-auto space-y-6">
          <Badge variant="secondary" className="uppercase tracking-wider">
            Documentation
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gradient">
            Endoshare Documentation
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Learn how to configure, operate, and maintain Endoshare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" asChild>
              <Link to="/">
                <Home className="h-4 w-4" /> Back to Homepage
              </Link>
            </Button>
            <Button asChild>
              <a href="#installation" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Jump to Installation
              </a>
            </Button>
          </div>
        </section>

        <section id="using-endoshare" className="bg-card border rounded-2xl shadow-sm p-8 space-y-6">
          <div className="space-y-2">
            <Badge variant="outline">Using Endoshare</Badge>
            <h2 className="text-3xl font-semibold">Core Workflows and Features</h2>
            <p className="text-muted-foreground">
              Endoshare merges and de-identifies endoscopic videos.
            </p>
          </div>
          <ol className="space-y-8 list-decimal pl-6">
            <li className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">Settings</h3>
                <p className="text-muted-foreground">
                  Configure output directories, and select runtime parameters. Endoshare
                  separates archive videos from de-identified shared outputs.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl bg-muted/40 p-4 space-y-2">
                  <h4 className="font-semibold">Archive Mode</h4>
                  <p className="text-muted-foreground">
                    When enabled, Endoshare preserves archive videos while creating
                    de-identified copies for sharing.
                  </p>
                </div>
                <div className="rounded-xl bg-muted/40 p-4 space-y-2">
                  <h4 className="font-semibold">Tip</h4>
                  <p className="text-muted-foreground">
                    A dictionary matching the de-identified video name and the patient
                    ID/name is always stored locally to facilitate traceability. When archive
                    mode is enabled, it is preserved in the archive directory; otherwise it is
                    stored in the de-identified output directory.
                  </p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border p-4 space-y-2">
                  <h4 className="font-semibold">Archive Repository</h4>
                  <p className="text-muted-foreground">
                    Videos in this directory contain identifiers and are used as a local
                    archive. Out-of-body regions are blurred.
                  </p>
                </div>
                <div className="rounded-xl border p-4 space-y-2">
                  <h4 className="font-semibold">De-Identified Output</h4>
                  <p className="text-muted-foreground">
                    Fully de-identified outputs are stored in this directory. Logs and audit
                    information are written here to support debugging.
                  </p>
                </div>
              </div>
            </li>
            <li className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">Home Window / Patient Selection</h3>
                <p className="text-muted-foreground">
                  Assign a patient identifier, select source video folders, and build the set of
                  clips to process.
                </p>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Enter Patient Name/ID:</strong> Provide the identifier for the case.</p>
                <p>
                  <strong>Browse Videos:</strong> Navigate to the folder containing raw endoscopic recordings.
                  Select the directory, not the single files.
                </p>
                <p>
                  <strong>Video Selection:</strong> The system scans the directory for compatible video files.
                  "Available Videos" are listed for selection. Use the dedicated buttons to add them to the
                  "Patient Videos" list; here videos' order can be adjusted by drag and drop. Reviewing the
                  selected clip can be done using the preview feature.
                </p>
                <p>
                  <strong>Confirm Patient Videos:</strong> After selecting and validating, finalize the selection.
                  The case is added to the queue; color coding reflects its state (e.g., pending in red; completed
                  in green).
                </p>
                <p><strong>Add New Patient:</strong> Begin another case while preserving existing entries in the queue.</p>
                <p><strong>Ready to Process:</strong> Confirmed patients appear in the ready list with status indicators.</p>
                <p>
                  The system aggregates and checks video resolutions for consistency; mismatches are flagged to avoid
                  downstream errors.
                </p>
              </div>
            </li>
            <li className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">Processing</h3>
                <p className="text-muted-foreground">
                  Processing performs merging, visual de-identification, and metadata stripping according to the
                  selected mode and parameters.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border p-4 space-y-2">
                  <h4 className="font-semibold">Start Processing</h4>
                  <p className="text-muted-foreground">
                    Launch the pipeline. UI controls adapt to reflect active jobs and prevent conflicting actions.
                  </p>
                </div>
                <div className="rounded-xl border p-4 space-y-2">
                  <h4 className="font-semibold">Mode &amp; Parameters</h4>
                  <p className="text-muted-foreground">
                    Frame rate, resolution, and purge policy influence how merges and anonymization are applied.
                  </p>
                </div>
              </div>
              <div className="rounded-xl bg-muted/40 p-4 space-y-2">
                <h4 className="font-semibold">Progress &amp; Logging</h4>
                <p className="text-muted-foreground">
                  Live status updates are shown. Completion changes the case’s queue color to signal success. Detailed
                  logs, including throughput and timing, are saved for audits.
                </p>
              </div>
            </li>
            <li className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">Controls &amp; Recovery</h3>
                <p className="text-muted-foreground">
                  Manage active jobs safely and recover from interruptions.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border p-4 space-y-2">
                  <h4 className="font-semibold">Terminate Processing</h4>
                  <p className="text-muted-foreground">
                    Allows graceful interruption with confirmation prompts to prevent accidental termination.
                  </p>
                </div>
                <div className="rounded-xl border p-4 space-y-2">
                  <h4 className="font-semibold">Reset</h4>
                  <p className="text-muted-foreground">
                    Clears the current UI state, returning the application to a clean slate.
                  </p>
                </div>
                <div className="rounded-xl border p-4 space-y-2">
                  <h4 className="font-semibold">Delete Patient Entry</h4>
                  <p className="text-muted-foreground">
                    Safely removes a case from the queue while preserving consistency.
                  </p>
                </div>
                <div className="rounded-xl border p-4 space-y-2">
                  <h4 className="font-semibold">Error Handling</h4>
                  <p className="text-muted-foreground">
                    Errors surface via dialogs, and the interface resets so inputs can be corrected and retried.
                  </p>
                </div>
              </div>
            </li>
            <li className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">Guided Operations</h3>
                <p className="text-muted-foreground">
                  Interactive elements—buttons, status badges, and tooltips—dynamically reflect workflow prerequisites.
                </p>
              </div>
              <p className="text-muted-foreground">
                Disabled actions include contextual explanations to guide correct sequencing and prevent misuse.
              </p>
            </li>
            <li className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">Safety &amp; Data Handling</h3>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border p-4 space-y-2">
                  <h4 className="font-semibold">Privacy-First</h4>
                  <p className="text-muted-foreground">
                    Outputs intended for sharing are de-identified visually and at the metadata level. Source material
                    remains local unless explicitly exported.
                  </p>
                </div>
                <div className="rounded-xl border p-4 space-y-2">
                  <h4 className="font-semibold">Auditability</h4>
                  <p className="text-muted-foreground">
                    All processing sessions and performance metrics are logged to the shared directory.
                  </p>
                </div>
              </div>
            </li>
          </ol>
        </section>

        <section
          id="installation"
          className="bg-muted/30 border rounded-2xl shadow-inner p-8 space-y-6"
        >
          <div className="space-y-2">
            <Badge variant="outline">Installation</Badge>
            <h2 className="text-3xl font-semibold">Install &amp; Launch from Source</h2>
            <p className="text-muted-foreground">
              Endoshare is distributed as source-available software. Ensure your environment matches the
              requirements below before cloning the repository.
            </p>
          </div>

          {/* Three-column responsive grid */}
          <div className="grid gap-6 md:grid-cols-3">
            {/* MacOS Box */}
            <div className="rounded-xl bg-card border p-6 space-y-4">
              <h3 className="text-xl font-semibold">Requirements — macOS</h3>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>certifi==2025.10.5</li>
                <li>charset-normalizer==3.4.4</li>
                <li>colorlog==6.10.1</li>
                <li>contourpy==1.3.2</li>
                <li>cycler==0.12.1</li>
                <li>fonttools==4.60.1</li>
                <li>idna==3.11</li>
                <li>kiwisolver==1.4.9</li>
                <li>loguru==0.7.3</li>
                <li>matplotlib==3.10.7</li>
                <li>numpy==2.2.6</li>
                <li>opencv-python==4.12.0.88</li>
                <li>packaging==25.0</li>
                <li>Pillow==12.0.0</li>
                <li>psutil==7.1.1</li>
                <li>pyparsing==3.2.5</li>
                <li>PyQt5==5.15.11</li>
                <li>PyQt5-Qt5==5.15.17</li>
                <li>PyQt5_sip==12.17.1</li>
                <li>python-dateutil==2.9.0.post0</li>
                <li>requests==2.32.5</li>
                <li>six==1.17.0</li>
                <li>tqdm==4.67.1</li>
                <li>urllib3==2.5.0</li>
                <li>vidgear==0.3.3</li>
              </ul>
            </div>

            {/* Windows Box */}
            <div className="rounded-xl bg-card border p-6 space-y-4">
              <h3 className="text-xl font-semibold">Requirements — Windows</h3>
              <p className="text-muted-foreground text-sm">Requires Python&nbsp;3.10 on Windows</p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>tensorflow-cpu==2.10.1</li>
                <li>numpy&gt;=1.23,&lt;2.0</li>
                <li>opencv-python&lt;4.9</li>
                <li>PyQt5==5.15.11</li>
                <li>vidgear==0.3.3</li>
                <li>tqdm&gt;=4.66</li>
                <li>requests&gt;=2.31</li>
                <li>protobuf==3.19.6</li>
                <li>tensorboard&lt;2.11</li>
                <li>pillow&gt;=9.4</li>
                <li>loguru&gt;=0.7</li>
                <li>colorlog&gt;=6.8</li>
                <li>matplotlib==3.10.7</li>
                <li>psutil==7.1.1</li>
              </ul>
            </div>

            {/* From Source Box */}
            <div className="rounded-xl bg-card border p-6 space-y-4">
              <h3 className="text-xl font-semibold">From Source</h3>
              <p className="text-muted-foreground">
                Follow these steps to clone the repository, install dependencies, download model weights, and
                set up FFmpeg before launching Endoshare.
              </p>
              <pre className="bg-muted rounded-lg p-4 text-sm overflow-x-auto">
                <code>{`# 1. Clone the repository
            git clone https://github.com/CAMMA-public/Endoshare_code.git
            cd Endoshare

            # 2. Install Python dependencies
            pip install -r requirements.txt

            # 3. Download model weights (OOBNet)
            # Create the checkpoint directory and download weights into it
            cd endoshare/resources
            mkdir -p ckpt
            cd ckpt
            wget https://s3.unistra.fr/camma_public/github/oobnet_detection/ckpt/oobnet_weights.h5
            cd ../../../

            # 4. Install FFmpeg binaries
            # The FFmpeg executable must be placed inside: endoshare/Externals/ffmpeg/

            # ── macOS / Linux ────────────────────────────────
            # Create the folder and download the static build
            mkdir -p endoshare/Externals/ffmpeg
            cd endoshare/Externals/ffmpeg
            wget https://johnvansickle.com/ffmpeg/releases/ffmpeg-release-amd64-static.tar.xz
            tar -xf ffmpeg-release-amd64-static.tar.xz
            mv ffmpeg-*-static/ffmpeg .
            cd ../../../..

            # ── Windows ─────────────────────────────────────
            # 1. Go to https://www.gyan.dev/ffmpeg/builds/
            # 2. Download "ffmpeg-git-full.7z"
            # 3. Extract it and copy the ffmpeg.exe binary into:
            #      endoshare\\Externals\\ffmpeg\\ffmpeg.exe

            # 5. Launch Endoshare
            python main.py`}</code>
              </pre>
            </div>
          </div>
        </section>

        <section className="bg-card border rounded-2xl p-8 space-y-6">
          <div className="space-y-2">
            <Badge variant="outline">License</Badge>
            <h2 className="text-3xl font-semibold">PolyForm Noncommercial License 1.0.0</h2>
            <p className="text-muted-foreground">
              Endoshare is released under the PolyForm Noncommercial License. Review the terms carefully before using
              or distributing the software.
            </p>
          </div>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Read the full license at {" "}
              <a
                href="https://polyformproject.org/licenses/noncommercial/1.0.0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                polyformproject.org
              </a>
              .
            </p>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Acceptance</h3>
              <p>
                In order to get any license under these terms, you must agree to them as both strict obligations and
                conditions to all your licenses.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Copyright License</h3>
              <p>
                The licensor grants you a copyright license for the software to do everything you might do with the
                software that would otherwise infringe the licensor&apos;s copyright in it for any permitted purpose.
                However, you may only distribute the software according to the Distribution License and make changes or
                new works based on the software according to the Changes and New Works License.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Distribution License</h3>
              <p>
                The licensor grants you an additional copyright license to distribute copies of the software. Your
                license to distribute covers distributing the software with changes and new works permitted by the
                Changes and New Works License.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Notices</h3>
              <p>
                You must ensure that anyone who gets a copy of any part of the software from you also gets a copy of
                these terms or the URL for them above, as well as copies of any plain-text lines beginning with
                “Required Notice:” that the licensor provided with the software.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Changes and New Works License</h3>
              <p>
                The licensor grants you an additional copyright license to make changes and new works based on the
                software for any permitted purpose.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Patent License</h3>
              <p>
                The licensor grants you a patent license for the software that covers patent claims the licensor can
                license, or becomes able to license, that you would infringe by using the software.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Noncommercial Purposes</h3>
              <p>Any noncommercial purpose is a permitted purpose.</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Personal Uses</h3>
              <p>
                Personal use for research, experiment, and testing for the benefit of public knowledge, personal study,
                private entertainment, hobby projects, amateur pursuits, or religious observance, without any anticipated
                commercial application, is use for a permitted purpose.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Noncommercial Organizations</h3>
              <p>
                Use by any charitable organization, educational institution, public research organization, public safety or
                health organization, environmental protection organization, or government institution is use for a permitted
                purpose regardless of the source of funding or obligations resulting from the funding.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Fair Use</h3>
              <p>You may have “fair use” rights for the software under the law. These terms do not limit them.</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">No Other Rights</h3>
              <p>
                These terms do not allow you to sublicense or transfer any of your licenses to anyone else, or prevent the
                licensor from granting licenses to anyone else. These terms do not imply any other licenses.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Patent Defense</h3>
              <p>
                If you make any written claim that the software infringes or contributes to infringement of any patent, your
                patent license for the software granted under these terms ends immediately. If your company makes such a claim,
                your patent license ends immediately for work on behalf of your company.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Violations</h3>
              <p>
                The first time you are notified in writing that you have violated any of these terms, or done anything with the
                software not covered by your licenses, your licenses can nonetheless continue if you come into full compliance
                with these terms, and take practical steps to correct past violations, within 32 days of receiving notice.
                Otherwise, all your licenses end immediately.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">No Liability</h3>
              <p>
                As far as the law allows, the software comes as is, without any warranty or condition, and the licensor will not
                be liable to you for any damages arising out of these terms or the use or nature of the software, under any kind
                of legal claim.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Definitions</h3>
              <p>
                The licensor is the individual or entity offering these terms, and the software is the software the licensor
                makes available under these terms. “You” refers to the individual or entity agreeing to these terms. “Your
                company” is any legal entity, sole proprietorship, or other kind of organization that you work for, plus all
                organizations that have control over, are under the control of, or are under common control with that
                organization. “Control” means ownership of substantially all the assets of an entity, or the power to direct its
                management and policies by vote, contract, or otherwise. Control can be direct or indirect. “Your licenses” are
                all the licenses granted to you for the software under these terms. “Use” means anything you do with the software
                requiring one of your licenses.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border bg-muted/30 p-8 space-y-4 text-center">
          <h2 className="text-2xl font-semibold">Important Disclaimer</h2>
          <p className="text-muted-foreground max-w-4xl mx-auto">
            Endoshare is research and educational software. It is not a medical device and is not certified for clinical or
            diagnostic use. Manual review of outputs is recommended to ensure privacy assurance before sharing any content.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Documentation;
