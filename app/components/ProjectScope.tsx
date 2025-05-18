"use client";
import React from "react";
import { motion } from "framer-motion";

const ProjectScope = () => {
  return (
    <motion.div
      className="min-h-screen bg-black text-gray-100 p-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="scope"
    >
      {/* Project Scope Title */}
      <h1 className="heading">
        Project <span className="text-purple">Scope</span>
      </h1>

      {/* Literature Survey Section */}
      <section className="my-20">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 border-b-4 border-purple-500 inline-block"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Literature Survey
        </motion.h2>
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div>
            <p className="mt-4 text-gray-300">
              Predictive Maintenance (PdM) is a proactive maintenance strategy
              that utilizes sensor data, machine learning, and analytics to
              forecast equipment failures before they occur [1]. It surpasses
              reactive and preventive approaches by enabling real-time
              monitoring and early failure detection. However, modern PdM
              systems face challenges including poor data quality, class
              imbalance, high computational costs, concept drift, and limited
              model interpretability. These issues hinder their real-world
              applicability and industrial scalability [2].
            </p>
            <p className="mt-4 text-gray-300">
              Data quality problems, such as sensor noise, missing values, and
              irrelevant signals, can bias models [3]. Though techniques like
              noise filtering and imputation are used, they remain insufficient.
              Class imbalance, caused by sparse failure data, leads to poor
              model performance. Approaches such as SMOTE and cost-sensitive
              learning [3] help but introduce synthetic data that may not
              reflect real failures. Deep learning models like CNNs and LSTMs
              [4] are powerful in capturing temporal patterns but are
              computationally intensive and require large labeled datasets,
              which are often unavailable in small to medium industries. Concept
              drift, where machine behavior changes over time, further
              complicates PdM; intermittent retraining [5][6] is advised but may
              be resource-intensive.
            </p>
            <p className="mt-4 text-gray-300">
              Moreover, PdM models often act as “black boxes,” making their
              outputs hard to interpret. Explainable AI (XAI) tools like SHAP
              and LIME aim to improve transparency, yet industrial adoption
              remains limited [3]. Furthermore, many PdM systems lack actionable
              recommendations following failure prediction. To address these
              gaps, this study proposes an optimized PdM framework incorporating
              automated real-time data preprocessing, advanced class balancing,
              ensemble learning for efficient computation, adaptive learning for
              handling concept drift, and XAI for better interpretability. It
              also integrates a machine learning-based Knowledge-Based System
              (KBS) to bridge the prediction-decision-making gap, aiming to
              improve accuracy, usability, and industrial decision-making
              efficiency.
            </p>
          </div>

          <div className="flex flex-row space-x-4">
            <div className="w-1/2">
              <img
                src="/ResearchGap.png"
                alt="Comparison Between PredictiveOps and Existing Systems"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
                priority
              />
              {/* <img src="/PREDICTIVEOPS-Static-Web/ResearchGap.png" alt="Coconut Export Stats" width="600" height="400" /> */}
              <p className="text-sm text-gray-400 mt-2">
                Figure 1: Comparison Between PredictiveOps and Existing Systems
              </p>
            </div>

            <div className="w-1/2">
              <h5 className="text-2xl font-semibold text-purple-400 mb-2">
                References
              </h5>
              <p className="text-gray-300 text-xs">
                [1] S. Madasamy, P. Shankar, R. K. Yadav and J. K. P, “A Machine
                Learning Approach in Predictive Maintenance in the IoT Enabled
                Industry 4.0,” in 2023 4th International Conference on Smart
                Electronics and Communication (ICOSEC), Trichy, India, 2023.{" "}
                <br />
                [2] A. Jadhav, R. Gaikwad, T. Patekar, S. Dighe, B. Shaikh and
                N. S. Patankar, “Predictive Maintenance of Industrial Equipment
                Using IoT and Machine Learning,” in 2023 4th International
                Conference on Computation, Automation and Knowledge Management
                (ICCAKM), Dubai, United Arab Emirates. <br />
                [3] P. Ghadekar, A. Manakshe, S. Madhikar, S. Patil, M. Mukadam
                and T. Gambhir, “Predictive Maintenance for Industrial
                Equipment: Using XGBoost and Local Outlier Factor with
                Explainable AI for analysis,” in 2024 14th International
                Conference on Cloud Computing, Data Science & Engineering
                (Confluence), Noida, India, 2024. <br />
                [4] M. Christ, N. Braun, J. Neuffer and A. W. Kempa-Liehr, “Time
                Series FeatuRe Extraction on basis of Scalable Hypothesis tests
                (tsfresh – A Python package),” Neurocomputing, p. 6, 23 May
                2018. <br />
                [5] J. Zhao, X. Huang, Y. Gao, J. Zhang, B. Su and Z. Dong,
                “Research on machine learning-based correlation analysis method
                for power equipment alarms,” in 2022 International Conference on
                Informatics, Networking and Computing (ICINC), China, 2022.{" "}
                <br />
                [6] M. Vijayakumar, P. S. Nair, S. B. G. Tilak Babu, K.
                Mahender, T. S. Venkateswaran and N. L, “Intelligent Systems For
                Predictive Maintenance In Industrial IoT,” in 2023 10th IEEE
                Uttar Pradesh Section International Conference on Electrical,
                Electronics and Computer Engineering (UPCON), Gautam Buddha
                Nagar, India, 2024.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Research Gap Section */}
      <section className="mb-20">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 border-b-4 border-purple-500 inline-block"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Research Gap
        </motion.h2>
        <div className="w-full">
          <p className="text-gray-300">
            Despite the advancements made in PdM, some gaps still prevail. Data
            quality issues still abound due to inability of existing noise
            reduction and imputation techniques to completely remove
            inconsistency in sensor measurement. Class imbalance is still
            problematic because traditional resampling techniques incorporate
            artificial failures which are not aligned with real application.
            Computational power is also problematic because deep models are
            computationally expensive, which limits their utilization in low
            computation industries. Concept drift is also a significant issue as
            current retraining approaches are not sufficient to handle varying
            machine conditions in a dynamic manner. The second key limitation is
            model interpretability, which hinders engineers from reacting to
            predictions. Lastly, while PdM models do generate failure alerts,
            they often fail to give structured recommendations for remedial
            actions that lower their applicability in real-world environments.
            Figure 1 shows that this study bridges these gaps by proposing an
            innovative PdM framework that combines real time data preprocessing,
            ensemble learning, adaptive retraining, explainable AI, and
            intelligent maintenance recommendations.
          </p>
          <br></br>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {[
            {
              title: "Real Time Data Preprocessing",
              description:
                "Despite progress in predictive maintenance, key gaps remain in real-time data processing, automated data balancing, and advanced feature engineering. Existing studies focus on predictive algorithms but neglect real-time integration, crucial for timely decisions in industrial settings. Class imbalance during continuous model retraining remains unsolved, as techniques like SMOTE are static and unsuitable for evolving datasets. Additionally, most systems lack context-specific feature extraction, reducing prediction accuracy and increasing computational load. This research addresses these gaps by proposing a real-time framework that integrates automated preprocessing, dynamic balancing, and tailored feature engineering to improve the adaptability and reliability of PdM systems.",
            },
            {
              title: "Potential Failure Predictions",
              description:
                "Traditional predictive maintenance models using singular machine learning algorithms like decision trees and SVMs struggle with accuracy and robustness in complex industrial settings. A key research gap is the underutilization of ensemble learning, which can improve predictive performance by combining multiple algorithms. While some studies explore ensembles, they rarely address real-time anomaly detection or rapid failure prediction. Delays in detection risk costly downtimes and safety issues. This research aims to develop a high-accuracy, low-latency predictive model using optimized ensemble techniques, addressing current limitations and enhancing the effectiveness of predictive maintenance systems in dynamic industrial environments.",
            },
            {
              title: "Model Retraining and Maintenance Scheduling",
              description:
                "Current predictive maintenance systems face key limitations, notably the lack of real-time model retraining and integration with maintenance scheduling. Static models become outdated as operational conditions evolve, reducing their effectiveness. Additionally, systems often fail to act on significant failure alerts by scheduling timely maintenance, risking increased downtime. Another gap is the underutilization of continuously collected maintenance data and engineer feedback, which are crucial for model improvement. Furthermore, most systems lack user-configurable anomaly detection thresholds, preventing domain experts from applying their insights to enhance accuracy. Addressing these issues is vital for creating more adaptive and effective predictive maintenance solutions.",
            },
            {
              title: "Failure Diagnosis and Maintenance Recommendations",
              description:
                "Despite advancements in predictive maintenance (PdM), key gaps remain in model interpretability, actionable insights, and integration of human expertise. Many PdM systems act as black boxes, limiting user trust and decision-making due to unclear prediction reasoning. They often lack guidance for actionable maintenance responses and fail to incorporate human input, reducing system effectiveness in complex scenarios. Additionally, limited feature importance and correlation analysis hinder long-term planning and optimization. The absence of robust tools for analyzing critical sensor data and integrating domain expertise restricts PdM systems from delivering reliable, context-aware, and adaptive maintenance strategies across diverse industrial environments.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold text-purple-400">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Research Problem & Solution Section */}
      <section className="mb-20">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 border-b-4 border-purple-500 inline-block"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Research Problem & Solution
        </motion.h2>
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div>
            <h3 className="text-2xl font-semibold text-purple-400">
              Proposed Problem
            </h3>
            <p className="mt-4 text-gray-300">
              Industrial equipment and machinery play a vital role in ensuring
              productivity, operational efficiency, and profitability. However,
              as machinery ages, it becomes increasingly prone to unexpected
              failures and unplanned downtime, posing significant threats to
              production continuity. Such breakdowns can severely disrupt
              operations, leading to substantial financial losses and
              inefficiencies. Traditionally, industries have relied on reactive
              and preventive maintenance strategies to manage these risks, but
              both approaches come with notable limitations. Reactive
              maintenance involves repairing equipment only after it has failed.
              While this method may seem cost-effective in the short term, it
              often results in extended downtime, high repair costs, and the
              need for emergency resources such as expedited parts and skilled
              labor. The sudden failure of critical machinery can halt entire
              production lines, causing delays, missed production targets, and
              even penalties due to contract breaches. The unpredictability of
              reactive maintenance makes it difficult to maintain consistent
              production schedules, leading to broader operational instability.
              Preventive maintenance, on the other hand, aims to mitigate these
              risks by scheduling maintenance at regular, predetermined
              intervals regardless of the equipment’s actual condition. Although
              this approach is more proactive than reactive maintenance, it also
              introduces inefficiencies. Over-maintenance leads to unnecessary
              servicing, which consumes time, labor, and materials without
              adding real value. Conversely, under-maintenance can occur if the
              scheduled intervals fail to align with the actual wear and tear of
              the equipment, resulting in avoidable failures. These limitations
              leave industries caught between two extremes: performing too much
              maintenance and incurring unnecessary costs, or not performing
              enough and risking equipment failure. Neither method optimally
              supports machinery performance or cost-efficiency. As such, there
              is a pressing need for more intelligent and data-driven
              maintenance approaches—like predictive maintenance—that can
              address the shortcomings of traditional strategies by leveraging
              real-time data and machine learning to predict and prevent
              failures more effectively.
            </p>
          </div>
          {/* <div className="w-full">
                        <iframe
                            width="100%"
                            height="300"
                            src="https://www.youtube.com/embed/sample-video-id"
                            title="YouTube video"
                            className="rounded-lg shadow-lg"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div> */}
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <h3 className="text-2xl font-semibold text-purple-400">
            Proposed Solution
          </h3>
          <p className="mt-4 text-gray-300">
            There is a critical need for a modern predictive maintenance system
            that uses real-time data and machine learning algorithms to support
            optimal maintenance decisions. Such a system can detect early signs
            of equipment failure, enabling timely interventions that prevent
            costly repairs and downtime. By leveraging historical sensor data,
            real-time monitoring, and advanced analytics, predictive maintenance
            helps industries shift from outdated strategies to a data-driven
            approach that enhances machinery reliability and operational
            efficiency. This approach overcomes the limitations of traditional
            maintenance methods, supporting the development of intelligent
            maintenance platforms that improve efficiency, reduce costs, and
            increase equipment reliability.
          </p>
        </motion.div>
      </section>

      {/* Research Objectives Section */}
      <section className="mb-20">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 border-b-4 border-purple-500 inline-block"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Research Objectives
        </motion.h2>
        <motion.ul
          className="list-disc pl-5 space-y-4 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <li>
            To develop a method for real-time preprocessing, balancing, and
            transferring sensor data to enhance machine learning performance.
          </li>
          <li>
            To develop a machine learning model to predict potential equipment
            failures and implement a notification system based on the severity
            of the failures.
          </li>
          <li>
            To track model performance over time and identify potential
            degradation in accuracy, retrain models with new data, and develop a
            solution for real-time monitoring and maintenance scheduling.
          </li>
          <li>
            To develop a comprehensive failure analysis system that includes
            detailed failure analysis, proactive maintenance suggestions,
            interactive diagnostic capabilities, and robust feature importance
            and correlation analysis.
          </li>
        </motion.ul>
      </section>

      {/* Methodology Section */}
      <section className="mb-20">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 border-b-4 border-purple-500 inline-block"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Methodology
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="col-span-1">
            <img
              src="/sysOverviewD.png"
              alt="Methodology Flow"
              width={700}
              height={500}
              className="rounded-lg shadow-lg"
              priority
            />
            {/* <img src="/PREDICTIVEOPS-Static-Web/sysOverviewD.png" alt="Coconut Export Stats" width="700" height="500" /> */}
            <p className="text-sm text-gray-400 mt-4">
              Figure 2: System Overview Diagramn
            </p>
          </div>
          <div className="col-span-2">
            <p className="mt-4 text-gray-300">
              The development of PredictiveOps follows a systematic approach to
              ensure high accuracy, efficiency, and adaptability in predictive
              maintenance. The system comprises four main components: real-time
              data preprocessing and transfer, machine learning-based failure
              prediction, performance monitoring with retraining, and in-depth
              failure analysis with diagnostics. The process begins with
              collecting real-time data from various sensors monitoring
              parameters like vibration, temperature, and rotational speed. This
              data undergoes thorough preprocessing, including noise reduction,
              outlier handling, and feature engineering using techniques like
              trend analysis and frequency-domain extraction. Class imbalances
              in the dataset are addressed to enhance model learning, and data
              is transferred instantly to prediction models using low-latency
              WebSocket connections. The second component focuses on failure
              prediction using machine learning models such as Random Forests,
              SVMs, and ANNs. Historical labeled data is used for training, with
              hyperparameter tuning and cross-validation improving
              generalization. These models are deployed for real-time anomaly
              detection, visually representing potential issues via stack
              indicators on dashboards. Detected faults, like drill or bearing
              issues, trigger immediate alerts via email and SMS and are stored
              in a database. To maintain accuracy over time, the system
              integrates continuous performance tracking and automated
              retraining using MLOps and CI/CD pipelines. Real-time metrics like
              accuracy, precision, and recall are monitored. If performance
              degrades, the system retrains with new data. Maintenance alerts
              are customizable, reducing false alarms, and automated scheduling
              prioritizes tasks based on fault severity and time-to-failure
              estimates. Lastly, the system includes comprehensive diagnostic
              capabilities using SHAP and LIME to explain predictions. A
              recommendation engine converts insights into actionable
              maintenance plans. Engineers can add contextual inputs, and
              interactive dashboards offer visual correlation analysis between
              sensor data and failures. Rigorous real-world testing ensures the
              system’s reliability, predictive accuracy, and effectiveness in
              industrial settings.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Technologies Used Section */}
      <section>
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 border-b-4 border-purple-500 inline-block"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Technologies Used
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {[
            {
              src: "/PREDICTIVEOPS-Static-Web/python.png",
              alt: "Python",
              name: "Python",
            },
            {
              src: "/PREDICTIVEOPS-Static-Web/react.png",
              alt: "React",
              name: "React",
            },
            {
              src: "/PREDICTIVEOPS-Static-Web/flask.jpg",
              alt: "Flask",
              name: "Flask",
            },
            {
              src: "/PREDICTIVEOPS-Static-Web/unity.png",
              alt: "Unity",
              name: "Unity",
            },
            {
              src: "/PREDICTIVEOPS-Static-Web/firebase.png",
              alt: "Firebase",
              name: "Firebase",
            },
            {
              src: "/PREDICTIVEOPS-Static-Web/chatgpt.png",
              alt: "ChatGPT",
              name: "ChatGPT 3.5",
            },
            {
              src: "/PREDICTIVEOPS-Static-Web/docker.png",
              alt: "Docker",
              name: "Docker",
            },
            {
              src: "/PREDICTIVEOPS-Static-Web/kub8.png",
              alt: "Kubernetes",
              name: "Kubernetes",
            },
            {
              src: "/PREDICTIVEOPS-Static-Web/gcp.png",
              alt: "GCP",
              name: "GCP",
            },
            {
              src: "/PREDICTIVEOPS-Static-Web/socket.io.png",
              alt: "Socket.io",
              name: "Socket.io",
            },
            {
              src: "/PREDICTIVEOPS-Static-Web/websocket.jpeg",
              alt: "websocket",
              name: "Websocket",
            },
          ].map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col justify-center items-center p-4 bg-gray-800 rounded-lg shadow-lg hover:bg-purple-600 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <img src={tech.src} alt={tech.alt} width="80" height="80" />
              <p className="text-white mt-4">{tech.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </motion.div>
  );
};

export default ProjectScope;
