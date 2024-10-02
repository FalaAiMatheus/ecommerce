import { monthlyFeesRate, qtMaxInstallments } from "@/core/constants";
import { Installment } from "./Installment";

export class CalculateInstallment {
  execute(
    value: number,
    qt_installments: number = qtMaxInstallments,
    rate_fees: number = monthlyFeesRate
  ): Installment {
    if (qt_installments < 2 || qt_installments > qtMaxInstallments) {
      throw new Error(
        `Quantidade de parcelas deve ser no máximo: ${qtMaxInstallments}`
      );
    }

    const totalWithFees = this.calculateCompoundInterest(
      value,
      rate_fees,
      qt_installments
    );

    return {
      installment_value: this.toTwoDecimalPlaces(
        totalWithFees / qt_installments
      ),
      total_value: this.toTwoDecimalPlaces(totalWithFees),
      qt_installments,
      rate_fees,
    };
  }
  private calculateCompoundInterest(
    totalValue: number,
    monthlyRate: number,
    qtInstallments: number
  ) {
    return totalValue * Math.pow(1 + monthlyRate, qtInstallments);
  }
  private toTwoDecimalPlaces(value: number): number {
    return Math.round(value * 100) / 100;
  }
}
