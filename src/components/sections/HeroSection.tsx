"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { YouTubeEmbed } from "@next/third-parties/google";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" as const },
  }),
};

export function HeroSection() {
  return (
    <section className="pt-28 pb-16 sm:pt-36 sm:pb-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text column */}
          <div>
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              <Badge>{siteConfig.hero.badge}</Badge>
            </motion.div>

            <motion.h1
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={1}
              className="mt-6 text-4xl font-bold leading-tight tracking-tight text-text-primary sm:text-5xl lg:text-6xl"
            >
              {siteConfig.hero.heading}
              <br />
              <span className="bg-gradient-to-r from-accent via-kube-blue to-kube-sky bg-clip-text text-transparent">
                {siteConfig.hero.headingAccent}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={2}
              className="mt-6 max-w-lg text-lg text-text-secondary"
            >
              {siteConfig.hero.tagline}
            </motion.p>

            <motion.p
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={3}
              className="mt-2 text-sm text-text-tertiary"
            >
              {siteConfig.locationLabel}
            </motion.p>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={4}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button href="#contact">
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn Profile
              </Button>
            </motion.div>
          </div>

          {/* Media column */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={2}
            className="flex flex-col items-center gap-6"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={siteConfig.images.photo}
                alt={`${siteConfig.name} — ${siteConfig.title}`}
                width={400}
                height={500}
                priority
                className="object-cover"
              />
            </div>

            {siteConfig.links.youtubeVideoId !== "VIDEO_ID_HERE" && (
              <div className="w-full max-w-sm overflow-hidden rounded-xl shadow-lg">
                <YouTubeEmbed
                  videoid={siteConfig.links.youtubeVideoId}
                  style="border-radius: 0.75rem;"
                />
              </div>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
