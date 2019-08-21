package com.omniwyse.booksapi.dto;

import java.math.BigDecimal;
import java.util.List;

import javax.persistence.Column;

public class CheckOutPaymentDTO extends BaseDTO {

	private long orderId;
	private BigDecimal totalOrderAmount;
	private BigDecimal advancePaid;
	private BigDecimal dueAmount;
	private BigDecimal totalAmountPaid;
	private boolean amountDueFlag;
	private BigDecimal amountPaid;
	private List<CheckedOutBookDTO> checkedOutBooksList;

	@Column(name = "order_id")
	public long getOrderId() {
		return orderId;
	}

	public void setOrderId(long orderId) {
		this.orderId = orderId;
	}

	@Column(name = "total_order_amount")
	public BigDecimal getTotalOrderAmount() {
		return totalOrderAmount;
	}

	public void setTotalOrderAmount(BigDecimal totalOrderAmount) {
		this.totalOrderAmount = totalOrderAmount;
	}

	@Column(name = "advance_paid")
	public BigDecimal getAdvancePaid() {
		return advancePaid;
	}

	public void setAdvancePaid(BigDecimal advancePaid) {
		this.advancePaid = advancePaid;
	}

	@Column(name = "due_amount")
	public BigDecimal getDueAmount() {
		return dueAmount;
	}

	public void setDueAmount(BigDecimal dueAmount) {
		this.dueAmount = dueAmount;
	}

	@Column(name = "total_amount_paid")
	public BigDecimal getTotalAmountPaid() {
		return totalAmountPaid;
	}

	public void setTotalAmountPaid(BigDecimal totalAmountPaid) {
		this.totalAmountPaid = totalAmountPaid;
	}

	@Column(name = "amount_due_flag")
	public boolean isAmountDueFlag() {
		return amountDueFlag;
	}

	public void setAmountDueFlag(boolean amountDueFlag) {
		this.amountDueFlag = amountDueFlag;
	}

	public BigDecimal getAmountPaid() {
		return amountPaid;
	}

	public void setAmountPaid(BigDecimal amountPaid) {
		this.amountPaid = amountPaid;
	}

	public List<CheckedOutBookDTO> getCheckedOutBooksList() {
		return checkedOutBooksList;
	}

	public void setCheckedOutBooksList(List<CheckedOutBookDTO> checkedOutBooksList) {
		this.checkedOutBooksList = checkedOutBooksList;
	}

}
