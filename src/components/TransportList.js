import React, { Fragment, useState } from 'react';
import addImage from '../assets/icons/add.svg';
import editImg from '../assets/icons/edit.svg';
import Voditel from './Voditel';
import Modal from './Modal';

const TransportList = (props) => {
	const [voditelModalShow, setVoditelModalShow] = useState(false);
	const drop = (ev) => {
		ev.currentTarget.parentNode.parentNode.classList.toggle("open");
	}
	if (props.data.length) {
		return (
			<>
				<Modal show={voditelModalShow} setShow={setVoditelModalShow}>
					<Voditel />
				</Modal>
				<table className="transportTable bordered-table" border="1">
					<thead >
						<tr>
							<th width="3%">

							</th>
							<th>
								Марка и Модель
						  </th>
							<th>
								Регистр. №
						  </th>
							<th>
								Год выпуска
						  </th>
						</tr>
					</thead>
					<tbody>
						{props.data.map((item, idx) => {
							return (
								<Fragment key={`transportlist${idx}`}>
									<tr className="closed">
										<td>
											<img src={addImage}
												className="cursor-pointer"
												onClick={(e) => drop(e)}
												alt="expand"
											/>
										</td>
										<td>
											{item.TB_MARKA} {item.TB_MODEL}
										</td>
										<td>
											{item.TB_REGNUMBER}
										</td>
										<td>
											{item.TB_YEAR}
										</td>
									</tr>
									<tr>
										<td colSpan="4">
											<div className="thedrop">
												<div className="row">
													<div className="col-md-4 attrs">
														<span>Цвет:</span>
														<span>
															{item.TB_COLOR}
														</span>
													</div>
													<div className="col-md-4 attrs">
														<span>№ кузова (шасси):</span>
														<span>
															{item.TB_KUZOV}

														</span>
													</div>
													<div className="col-md-4 attrs">
														<span>№ двигателя:</span>
														<span>

															{item.TB_DVIGATEL}

														</span>
													</div>
													<div className="col-md-4 attrs">
														<span>№ тех. паспорта:</span>
														<span>
															{item.TB_TEXPSERY} {item.TEXPNUMBER}
														</span>
													</div>
													<div className="col-md-4 attrs">
														<span>Стоимость ТС:</span>
														<span>
															{item.TB_STOIMOST}
														</span>
													</div>
													<div className="col-md-4 attrs">
														<span>Противоугонная сигнализация:</span>
														<span>
															<input type="checkbox" disabled defaultChecked={item.TB_SIGNAL} />
														</span>
													</div>
												</div>
												<div className="row">
													<div className="col-md-12 attrs">
														<div className="v-center">
															Водители № доверенности, прав (категория):
											  <button onClick={() => setVoditelModalShow(true)} className="bg-skyblue p-0">
																<img src={addImage}
																	className="cursor-pointer"
																	alt="expand"
																/>
															</button>
														</div>
														<ul>
															<li>
																<button>
																	YANGI USER USER (AA123321, DOVERENNOST, B:C)
												  </button>
															</li>
														</ul>
													</div>
													<div className="col-md-12 attrs">
														<div>
															Примечания (наличие повреждений):
										  </div>
														<div>
															{item.TB_COMMENT}
														</div>
													</div>
												</div>
												<div className="editBtnCnt">
													<button>
														<img src={editImg} alt="edit" className="cursor-pointer" />
													</button>
												</div>
											</div>
										</td>
									</tr>
								</Fragment>)
						})}
					</tbody>
				</table>
			</>
		)
	} else {
		return <p>Нет выбранных объектов</p>
	}

}

export default TransportList;