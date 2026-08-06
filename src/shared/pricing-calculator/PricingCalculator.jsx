import { useMemo, useState } from "react";
import { Minus, Plus, ShieldCheck, ArrowRight, Zap, BadgePercent } from "lucide-react";
import {
  CALCULATOR_SERVICES,
  TURNAROUND_OPTIONS,
  BULK_DISCOUNT_THRESHOLD,
  BULK_DISCOUNT_PERCENT,
  MIN_PHOTOS,
  MAX_PHOTOS,
} from "@/constants/pricingData";
import { ROUTES } from "@/constants/routes";
import Button from "@/shared/buttons/Button";
import SectionTitle from "@/shared/section-title/SectionTitle";
import OrganicShape from "@/shared/decorations/OrganicShape";
import styles from "./PricingCalculator.module.css";

const PricingCalculator = () => {
  const [serviceId, setServiceId] = useState(CALCULATOR_SERVICES[0].id);
  const [turnaroundId, setTurnaroundId] = useState(TURNAROUND_OPTIONS[0].id);
  const [photoCount, setPhotoCount] = useState(200);

  const selectedService = CALCULATOR_SERVICES.find((s) => s.id === serviceId);
  const selectedTurnaround = TURNAROUND_OPTIONS.find((t) => t.id === turnaroundId);

  const { pricePerImage, discountAmount, total, hasDiscount } =
    useMemo(() => {
      const price = selectedService.basePrice * selectedTurnaround.multiplier;
      const sub = price * photoCount;
      const isEligible = photoCount >= BULK_DISCOUNT_THRESHOLD;
      const discount = isEligible ? (sub * BULK_DISCOUNT_PERCENT) / 100 : 0;

      return {
        pricePerImage: price,
        discountAmount: discount,
        total: sub - discount,
        hasDiscount: isEligible,
      };
    }, [selectedService, selectedTurnaround, photoCount]);

  const updatePhotoCount = (value) => {
    const clamped = Math.min(MAX_PHOTOS, Math.max(MIN_PHOTOS, value));
    setPhotoCount(clamped);
  };

  return (
    <section className={styles.calculator}>
      <OrganicShape position="bottom-right" width={260} color="#e3eafe" zIndex={0} flipX flipY />

      <div className={styles.container}>
        <SectionTitle
          eyebrow="Pricing Calculator"
          heading="Calculate Your"
          highlight="Editing Price"
          subtext="From simple clipping paths to advanced photo retouching, outsourced image editing services are ideal if you are..."
          divider
        />

        <div className={styles.panels}>
          <div className={styles.formPanel}>
            <div className={styles.field}>
              <label className={styles.stepLabel}>
                <span className={styles.stepNumber}>1</span> Select Service
              </label>
              <select
                className={styles.select}
                value={serviceId}
                onChange={(event) => setServiceId(event.target.value)}
              >
                {CALCULATOR_SERVICES.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.label}
                  </option>
                ))}
              </select>
              {selectedService.description && (
                <p className={styles.fieldHint}>{selectedService.description}</p>
              )}
            </div>

            <div className={styles.field}>
              <label className={styles.stepLabel}>
                <span className={styles.stepNumber}>2</span> Select Turnaround Time
              </label>
              <div className={styles.turnaroundGrid}>
                {TURNAROUND_OPTIONS.map((option) => {
                  const isActive = turnaroundId === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      className={`${styles.turnaroundCard} ${
                        isActive ? styles.turnaroundActive : ""
                      }`}
                      onClick={() => setTurnaroundId(option.id)}
                    >
                      <span
                        className={`${styles.radioDot} ${
                          isActive ? styles.radioDotActive : ""
                        }`}
                      />
                      <span className={styles.turnaroundIcon}>
                        <Zap size={16} />
                      </span>
                      <span className={styles.turnaroundLabel}>{option.label}</span>
                      <span className={styles.turnaroundPrice}>
                        ${(selectedService.basePrice * option.multiplier).toFixed(2)}/Image
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.stepLabel}>
                <span className={styles.stepNumber}>3</span> Number of Photos
              </label>

              <div className={styles.numberRow}>
                <div className={styles.stepper}>
                  <button
                    type="button"
                    onClick={() => updatePhotoCount(photoCount - 1)}
                    aria-label="Decrease photo count"
                  >
                    <Minus size={16} />
                  </button>
                  <input
                    type="number"
                    className={styles.stepperInput}
                    value={photoCount}
                    onChange={(event) =>
                      updatePhotoCount(Number(event.target.value) || 0)
                    }
                  />
                  <button
                    type="button"
                    onClick={() => updatePhotoCount(photoCount + 1)}
                    aria-label="Increase photo count"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <div className={styles.sliderWrapper}>
                  <input
                    type="range"
                    min={MIN_PHOTOS}
                    max={MAX_PHOTOS}
                    value={photoCount}
                    onChange={(event) => updatePhotoCount(Number(event.target.value))}
                    className={styles.rangeInput}
                    aria-label="Number of photos"
                  />

                  <div className={styles.rangeMarks}>
                    <span>1</span>
                    <span>100</span>
                    <span>200</span>
                    <span>300</span>
                    <span>500</span>
                  </div>
                </div>
              </div>
            </div>

            {hasDiscount && (
              <div className={styles.discountBanner}>
                <span className={styles.discountIcon}>
                  <BadgePercent size={18} />
                </span>
                <span className={styles.discountText}>
                  <strong>Bulk Discount Applied</strong>
                  <span>
                    You&apos;re saving {BULK_DISCOUNT_PERCENT}% on the base price of{" "}
                    {photoCount} images.
                  </span>
                </span>
                <span className={styles.discountBadge}>
                  {BULK_DISCOUNT_PERCENT}% OFF
                </span>
              </div>
            )}
          </div>

          <div className={styles.estimatePanel}>
            <h3 className={styles.estimateTitle}>Your Estimate</h3>
            <p className={styles.estimateSubtitle}>
              Review your selections and total amount
            </p>

            <div className={styles.estimateRow}>
              <span>Service</span>
              <span>{selectedService.label}</span>
            </div>
            <div className={styles.estimateRow}>
              <span>Turnaround Time</span>
              <span>{selectedTurnaround.label}</span>
            </div>
            <div className={styles.estimateRow}>
              <span>Number of Photos</span>
              <span>{photoCount} Images</span>
            </div>
            <div className={styles.estimateRow}>
              <span>Price per Image</span>
              <span>${pricePerImage.toFixed(2)}</span>
            </div>

            {hasDiscount && (
              <div className={`${styles.estimateRow} ${styles.discountRow}`}>
                <span>Discount</span>
                <span>-${discountAmount.toFixed(2)}</span>
              </div>
            )}

            <div className={styles.estimateDivider} />

            <div className={styles.totalRow}>
              <span>Total Amount</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <p className={styles.secureNote}>
              <span className={styles.secureIcon}>
                <ShieldCheck size={14} />
              </span>
              Secure, reliable and 100% quality guaranteed
            </p>

            <Button
              to={ROUTES.REGISTER}
              variant="primary"
              fullWidth
              icon={<ArrowRight size={16} />}
            >
              Get My Image Edit
            </Button>

            <Button
              to={ROUTES.CONTACT}
              variant="outline"
              fullWidth
              icon={<ArrowRight size={16} />}
            >
              Request Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCalculator;