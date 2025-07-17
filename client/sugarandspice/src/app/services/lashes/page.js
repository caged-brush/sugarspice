import Etiquette from "@/component/etiquette";
import Footer from "@/component/footer";
import Header from "@/component/header";
import React from "react";

function page() {
  return (
    <>
      <Header />
      <div className="flex justify-center items-start min-h-screen ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 w-full max-w-6xl border rounded-4xl shadow-2xl">
          <div className="p-4 sm:p-8">
            <div className="mb-10">
              <h1 className="text-2xl sm:text-3xl font-bold mb-4">Lashes</h1>
              <p>
                Our semi-permanent individual eyelash extensions are applied
                lash by lash one at a time for the most natural look and feel.
                Unlike &apos;flares&apos; or &apos;cluster&apos; lashes that are
                often applied as lash extensions, our signature sets of seamless
                lashes are applied either one hair or volume fan at a time to
                maintain the health and integrity of the natural lashes.
              </p>
              <br />
              <p>
                With precision application and attention to detail your
                experienced lash technician will customize each set to best suit
                your eye according to lifestyle, design, length, curl and
                texture.
              </p>
              <br />
              <p>
                As Kamloops premier Lash and Brow studio you can rest assured
                that our certified lash technicians are committed to ongoing
                advanced training and use only the highest quality products for
                safety and longevity.
              </p>
              <br />
              <p>
                At Sugar &amp; Spice we specialize in corrections and
                damage-free lashing. People who use these services will love the
                simplicity and lash boost they get from extensions without
                mascara!
              </p>
              <br />
              <span>
                Check us out{" "}
                <a
                  href="https://www.instagram.com/sugarspicebeauty/"
                  className="font-bold"
                >
                  @sugarspicebeauty
                </a>{" "}
                to see our lashes in action!
              </span>
            </div>
            <hr className="border-t" />
            <div className="mt-10">
              <h1 className="text-2xl sm:text-3xl font-bold mb-4">Glam</h1>
              <p>
                Hail all mascara lovers! Being the most popular set, the glam
                service most closely simulates the look of a coat of mascara.
                Wake up pretty and enjoy that extra time for yourself each
                morning.
              </p>
              <span className="font-bold">$190.00 books for two hours</span>
            </div>
            <hr className="border-t mt-10" />
            <div className="mt-10">
              <h1 className="text-2xl sm:text-3xl font-bold mb-4">Dramatic</h1>
              <p>
                Great for special occasions, events, holidays, or ideal for
                those who love a full, voluminous look. This set photographs
                well, has amazing retention and will allow you to wake up
                feeling fabulous without the hassle of applying several coats of
                mascara before donning a great set of lashes. Books for 120
                minutes.
              </p>
              <span className="font-bold">$200.00 books for three hours</span>
            </div>
            <hr className="border-t mt-10" />
            <div className="mt-10">
              <h1 className="text-2xl sm:text-3xl font-bold mb-4">Refill</h1>
              <p>Our standard sixty minute lash refill</p>
              <span className="font-bold">$110.00</span>
            </div>
            <hr className="border-t mt-10" />
            <div className="mt-10">
              <h1 className="text-2xl sm:text-3xl font-bold mb-4">
                Deluxe Lash Refill
              </h1>
              <p>
                For those that want a little more our ninety minute lash refill
              </p>
              <span className="font-bold">$110.00</span>
            </div>
            <hr className="border-t mt-10" />
            <div className="mt-10">
              <h1 className="text-2xl sm:text-3xl font-bold mb-4">
                Lash Removal
              </h1>
              <p>Need to start fresh, you&apos;ve got you covered.</p>
              <span className="font-bold">$31.50 books for thirty minutes</span>
            </div>
            <hr className="border-t mt-10" />
            <div className="mt-10">
              <h1 className="text-2xl sm:text-3xl font-bold mb-4">
                Lash Lift and Tint
              </h1>
              <p>
                A client favorite, this treatment includes the lash lift and
                tint to complete your look. The client specific curl and tint
                lasts up to eight weeks for an au natural look without the
                hassle of curlers or mascara! Includes an indulgent hand and arm
                massage and paraffin treatment.
              </p>
              <span className="font-bold">
                $90.00 books for seventy five minutes
              </span>
            </div>
            <hr className="border-t mt-10" />
            <div className="mt-10">
              <h1 className="text-2xl sm:text-3xl font-bold mb-4">Lash Lift</h1>
              <p>
                Get that perfect curl to lift and open the eyes with a
                customized curl that lasts up to eight weeks. A perfect
                enhancement to straight lashes over nine millimeters in length
                without the use of an eyelash curler. Includes an indulgent hand
                and arm massage.
              </p>
              <span className="font-bold">$75.00 books for sixty minutes</span>
            </div>
            <p className="font-bold mt-10">
              Please be aware that any lash extension services booked with
              Arnica include a price increase. This is a reflection of her high
              demand and years of experience and training.
            </p>
          </div>
          <div className="flex justify-center lg:justify-start">
            <Etiquette />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default page;
